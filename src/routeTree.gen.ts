/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeImport } from './routes/home'
import { Route as AppLayoutRouteImport } from './routes/appLayout/route'
import { Route as IndexImport } from './routes/index'
import { Route as ImageGalleryIndexImport } from './routes/image-gallery/index'
import { Route as ImageGalleryImgIdImport } from './routes/image-gallery/$imgId'
import { Route as AppLayoutSettingImport } from './routes/appLayout/setting'
import { Route as AppLayoutUserIndexImport } from './routes/appLayout/user/index'

// Create/Update Routes

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutRouteRoute = AppLayoutRouteImport.update({
  id: '/appLayout',
  path: '/appLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ImageGalleryIndexRoute = ImageGalleryIndexImport.update({
  id: '/image-gallery/',
  path: '/image-gallery/',
  getParentRoute: () => rootRoute,
} as any)

const ImageGalleryImgIdRoute = ImageGalleryImgIdImport.update({
  id: '/image-gallery/$imgId',
  path: '/image-gallery/$imgId',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutSettingRoute = AppLayoutSettingImport.update({
  id: '/setting',
  path: '/setting',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)

const AppLayoutUserIndexRoute = AppLayoutUserIndexImport.update({
  id: '/user/',
  path: '/user/',
  getParentRoute: () => AppLayoutRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/appLayout': {
      id: '/appLayout'
      path: '/appLayout'
      fullPath: '/appLayout'
      preLoaderRoute: typeof AppLayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/appLayout/setting': {
      id: '/appLayout/setting'
      path: '/setting'
      fullPath: '/appLayout/setting'
      preLoaderRoute: typeof AppLayoutSettingImport
      parentRoute: typeof AppLayoutRouteImport
    }
    '/image-gallery/$imgId': {
      id: '/image-gallery/$imgId'
      path: '/image-gallery/$imgId'
      fullPath: '/image-gallery/$imgId'
      preLoaderRoute: typeof ImageGalleryImgIdImport
      parentRoute: typeof rootRoute
    }
    '/image-gallery/': {
      id: '/image-gallery/'
      path: '/image-gallery'
      fullPath: '/image-gallery'
      preLoaderRoute: typeof ImageGalleryIndexImport
      parentRoute: typeof rootRoute
    }
    '/appLayout/user/': {
      id: '/appLayout/user/'
      path: '/user'
      fullPath: '/appLayout/user'
      preLoaderRoute: typeof AppLayoutUserIndexImport
      parentRoute: typeof AppLayoutRouteImport
    }
  }
}

// Create and export the route tree

interface AppLayoutRouteRouteChildren {
  AppLayoutSettingRoute: typeof AppLayoutSettingRoute
  AppLayoutUserIndexRoute: typeof AppLayoutUserIndexRoute
}

const AppLayoutRouteRouteChildren: AppLayoutRouteRouteChildren = {
  AppLayoutSettingRoute: AppLayoutSettingRoute,
  AppLayoutUserIndexRoute: AppLayoutUserIndexRoute,
}

const AppLayoutRouteRouteWithChildren = AppLayoutRouteRoute._addFileChildren(
  AppLayoutRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/appLayout': typeof AppLayoutRouteRouteWithChildren
  '/home': typeof HomeRoute
  '/appLayout/setting': typeof AppLayoutSettingRoute
  '/image-gallery/$imgId': typeof ImageGalleryImgIdRoute
  '/image-gallery': typeof ImageGalleryIndexRoute
  '/appLayout/user': typeof AppLayoutUserIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/appLayout': typeof AppLayoutRouteRouteWithChildren
  '/home': typeof HomeRoute
  '/appLayout/setting': typeof AppLayoutSettingRoute
  '/image-gallery/$imgId': typeof ImageGalleryImgIdRoute
  '/image-gallery': typeof ImageGalleryIndexRoute
  '/appLayout/user': typeof AppLayoutUserIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/appLayout': typeof AppLayoutRouteRouteWithChildren
  '/home': typeof HomeRoute
  '/appLayout/setting': typeof AppLayoutSettingRoute
  '/image-gallery/$imgId': typeof ImageGalleryImgIdRoute
  '/image-gallery/': typeof ImageGalleryIndexRoute
  '/appLayout/user/': typeof AppLayoutUserIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/appLayout'
    | '/home'
    | '/appLayout/setting'
    | '/image-gallery/$imgId'
    | '/image-gallery'
    | '/appLayout/user'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/appLayout'
    | '/home'
    | '/appLayout/setting'
    | '/image-gallery/$imgId'
    | '/image-gallery'
    | '/appLayout/user'
  id:
    | '__root__'
    | '/'
    | '/appLayout'
    | '/home'
    | '/appLayout/setting'
    | '/image-gallery/$imgId'
    | '/image-gallery/'
    | '/appLayout/user/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppLayoutRouteRoute: typeof AppLayoutRouteRouteWithChildren
  HomeRoute: typeof HomeRoute
  ImageGalleryImgIdRoute: typeof ImageGalleryImgIdRoute
  ImageGalleryIndexRoute: typeof ImageGalleryIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppLayoutRouteRoute: AppLayoutRouteRouteWithChildren,
  HomeRoute: HomeRoute,
  ImageGalleryImgIdRoute: ImageGalleryImgIdRoute,
  ImageGalleryIndexRoute: ImageGalleryIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/appLayout",
        "/home",
        "/image-gallery/$imgId",
        "/image-gallery/"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/appLayout": {
      "filePath": "appLayout/route.jsx",
      "children": [
        "/appLayout/setting",
        "/appLayout/user/"
      ]
    },
    "/home": {
      "filePath": "home.jsx"
    },
    "/appLayout/setting": {
      "filePath": "appLayout/setting.jsx",
      "parent": "/appLayout"
    },
    "/image-gallery/$imgId": {
      "filePath": "image-gallery/$imgId.jsx"
    },
    "/image-gallery/": {
      "filePath": "image-gallery/index.jsx"
    },
    "/appLayout/user/": {
      "filePath": "appLayout/user/index.jsx",
      "parent": "/appLayout"
    }
  }
}
ROUTE_MANIFEST_END */
