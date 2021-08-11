declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module '*.module.less';
declare module '@antv/f2/lib/*';

declare namespace Project {
  namespace request {
    interface Params {
      url: string
      method?: 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK' | undefined
      header?: Project.General.IAnyObject
      data?: string | Project.General.IAnyObject | ArrayBuffer
    }
    interface Option {
      proxy?: boolean
      pageError?: boolean
      needLogin?: boolean
    }
  }
  namespace response {
    interface success {
      success: boolean
      data: Project.response.success
      code?: string
      message?: string
    }

    interface error {
      success: boolean
      data?: unknown
      code?: string
      message?: string
    }
  }
  namespace General {
    type Record<K extends keyof any, T> = {
      [P in K]: T
    }
    type IAnyObject = Record<string, any>
    type NoneEmptyArray<T> = [T, ...T[]]

    interface Response {
      success: boolean
      data?: unknown
      message?: string
      code?: string
    }

    interface Success {
      success: boolean
      data?: unknown
      code?: string
    }

    interface Error {
      success: boolean
      message: string
      code?: string
    }
  }
}
