import {list, removeRule, updateRule} from '@/services/ant-design-pro/api';
import {message} from 'antd';
import React, {useState} from 'react';
import {EditableProTable} from '@ant-design/pro-components';

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};


export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: any = [
    {
      title: '名称',
      dataIndex: 'itemName',
      // width: '15%',
    },
    {
      title: '图标',
      dataIndex: 'img',
      valueType: 'image',
      render: (dom, entity) => {
        return <img src={entity.img} style={{width: '30px'}}/>;
      },
    },
    // {
    //   title: '描述',
    //   dataIndex: 'des',
    //   // valueType: 'textarea',
    // },
    {
      title: '类别',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        1: {
          text: 'Win',
        },
        2: {
          text: 'MacOS',
        }
      },
    },
    {
      title: '状态',
      key: 'isEnable',
      dataIndex: 'isEnable',
      valueType: 'select',
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Error',
        },
        1: {
          text: '已上线',
          status: 'Success',
        },
      },
    },
    {
      title: '描述',
      dataIndex: 'des',
      fieldProps: (form, {rowKey, rowIndex}) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '下载链接',
      dataIndex: 'channel0Url',
      // valueType: 'textarea',
      render: (dom, entity) => {
        return (
          <a href={entity.channel0Url} target="_blank">
            下载链接
          </a>
        );
      },
    },
    {
      title: '备用下载',
      dataIndex: 'channel1Url',
      // valueType: 'textarea',
      render: (dom, entity) => {
        return (
          <a href={entity.channel1Url} target="_blank">
            备用下载
          </a>
        );
      },
    },
    {
      title: '操作',
      valueType: 'option',
      // width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  let data;
  return (
    <>
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="数据管理"
        // maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
              position: position as 'top',
              record: () => ({id: (Math.random() * 1000000).toFixed(0)}),
            }
            : false
        }
        loading={false}
        // toolBarRender={() => [
        //   <ProFormRadio.Group
        //     key="render"
        //     fieldProps={{
        //       value: position,
        //       onChange: (e) => setPosition(e.target.value),
        //     }}
        //     options={[
        //       {
        //         label: '添加到顶部',
        //         value: 'top',
        //       },
        //       {
        //         label: '添加到底部',
        //         value: 'bottom',
        //       },
        //       {
        //         label: '隐藏',
        //         value: 'hidden',
        //       },
        //     ]}
        //   />,
        // ]}
        columns={columns}
        request={async () => {
          data = await list({});
          data = data.data;
          console.log(data);
          return {
            data: data,
            total: 3,
            success: true,
          };
        }}
        value={data}
        // onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            // console.log(data);
            const req = await updateRule(data);
            if (req.code === 200) {
              message.success("操作成功！");
            } else {
              message.error("系统错误！")
            }
          },
          onChange: setEditableRowKeys,
          onDelete: async (key, row) => {
            // console.log('row', row);
            const req = await removeRule(row.id)
            if (req.code === 200) {
              message.success("删除成功！");
            } else {
              message.error("系统错误！")
            }
          },
        }}
      />
      {/*<ProCard title="表格数据" headerBordered collapsible defaultCollapsed>*/}
      {/*  <ProFormField*/}
      {/*    ignoreFormItem*/}
      {/*    fieldProps={{*/}
      {/*      style: {*/}
      {/*        width: '100%',*/}
      {/*      },*/}
      {/*    }}*/}
      {/*    mode="read"*/}
      {/*    valueType="jsonCode"*/}
      {/*    text={JSON.stringify(dataSource)}*/}
      {/*  />*/}
      {/*</ProCard>*/}
    </>
  );
};
