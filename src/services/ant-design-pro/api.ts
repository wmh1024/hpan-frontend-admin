// @ts-ignore
/* eslint-disable */
import {request} from 'umi';

const path = "/api"

/** 获取当前的用户 GET /admin */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.BaseResponse;
  }>(path + '/admin', {
    method: 'GET',
    xhrFields: {
      withCredentials: true
    },
    ...(options || {}),
  });
}

/** 退出登录接口 POST /login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse>(path + '/admin/logout', {
    method: 'GET',
    xhrFields: {
      withCredentials: true
    },
    ...(options || {}),
  });
}

/** 登录接口 POST /admin/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse>(path + '/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    xhrFields: {
      withCredentials: true
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取数据列表 GET /list */
export async function list(params: any) {
  return request<API.BaseResponse>(path + '/list', {
    method: 'GET',
    params: {
      ...params,
    },
    xhrFields: {
      withCredentials: true
    },
  });
}

/** 修改规则 PUT /list */
export async function updateRule(body?: { [key: string]: any }) {
  return request<API.RuleListItem>(path + '/list', {
    method: 'PUT',
    data: body,
    xhrFields: {
      withCredentials: true
    },
  });
}

/** 新建规则 POST /list/add */
export async function addList(body: any) {
  // console.log('body', body);
  return request<API.BaseResponse>(path + '/list/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    xhrFields: {
      withCredentials: true
    },
    data: body,
  });
}

/** 删除规则 DELETE /rule */
export async function removeRule(id: any) {
  return request<Record<string, any>>(path + `/list/${id}`, {
    method: 'DELETE',
    xhrFields: {
      withCredentials: true
    },
  });
}
