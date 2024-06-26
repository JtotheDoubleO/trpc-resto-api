import * as superjson from 'superjson';
import * as _trpc_server from '@trpc/server';
import * as express from 'express';
import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';
import { Prisma } from '@prisma/client';

declare const appRouter: _trpc_server.CreateRouterInner<
  _trpc_server.RootConfig<{
    ctx: {
      req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
      res: express.Response<any, Record<string, any>>;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: typeof superjson.default;
  }>,
  {
    getRestaurants: _trpc_server.BuildProcedure<
      'query',
      {
        _config: _trpc_server.RootConfig<{
          ctx: {
            req: express.Request<
              express_serve_static_core.ParamsDictionary,
              any,
              any,
              qs.ParsedQs,
              Record<string, any>
            >;
            res: express.Response<any, Record<string, any>>;
          };
          meta: object;
          errorShape: _trpc_server.DefaultErrorShape;
          transformer: typeof superjson.default;
        }>;
        _meta: object;
        _ctx_out: {
          req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
          res: express.Response<any, Record<string, any>>;
        };
        _input_in:
          | {
              category?: string | null | undefined;
              q?: string | null | undefined;
            }
          | null
          | undefined;
        _input_out:
          | {
              category?: string | null | undefined;
              q?: string | null | undefined;
            }
          | null
          | undefined;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
      },
      (
        | {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            images: string[];
            featured: PrismaJson.Featured | null;
            rating: number;
            ratingCount: bigint;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
            isFavorite: boolean;
          }
        | {
            featured: Prisma.JsonObject;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            images: string[];
            rating: number;
            ratingCount: bigint;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
            isFavorite: boolean;
          }
      )[]
    >;
    addFavorite: _trpc_server.BuildProcedure<
      'mutation',
      {
        _config: _trpc_server.RootConfig<{
          ctx: {
            req: express.Request<
              express_serve_static_core.ParamsDictionary,
              any,
              any,
              qs.ParsedQs,
              Record<string, any>
            >;
            res: express.Response<any, Record<string, any>>;
          };
          meta: object;
          errorShape: _trpc_server.DefaultErrorShape;
          transformer: typeof superjson.default;
        }>;
        _meta: object;
        _ctx_out: {
          req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
          res: express.Response<any, Record<string, any>>;
        };
        _input_in: {
          id: string;
          patch: {
            id?: string | undefined;
            isFavorite?: boolean | undefined;
            images?: string[] | undefined;
            featured?:
              | {
                  text: string;
                  icon: string;
                }
              | undefined;
            name?: string | undefined;
            rating?: number | undefined;
            ratingCount?: number | undefined;
            city?: string | undefined;
            category?: string | undefined;
            priceRange?: string | undefined;
            desc?: string | undefined;
          };
        };
        _input_out: {
          id: string;
          patch: {
            id?: string | undefined;
            isFavorite?: boolean | undefined;
            images?: string[] | undefined;
            featured?:
              | {
                  text: string;
                  icon: string;
                }
              | undefined;
            name?: string | undefined;
            rating?: number | undefined;
            ratingCount?: number | undefined;
            city?: string | undefined;
            category?: string | undefined;
            priceRange?: string | undefined;
            desc?: string | undefined;
          };
        };
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
      },
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        images: string[];
        featured: PrismaJson.Featured | null;
        rating: number;
        ratingCount: bigint;
        city: string;
        category: string;
        priceRange: string;
        desc: string;
        isFavorite: boolean;
      }
    >;
    seedDb: _trpc_server.BuildProcedure<
      'mutation',
      {
        _config: _trpc_server.RootConfig<{
          ctx: {
            req: express.Request<
              express_serve_static_core.ParamsDictionary,
              any,
              any,
              qs.ParsedQs,
              Record<string, any>
            >;
            res: express.Response<any, Record<string, any>>;
          };
          meta: object;
          errorShape: _trpc_server.DefaultErrorShape;
          transformer: typeof superjson.default;
        }>;
        _ctx_out: {
          req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
          res: express.Response<any, Record<string, any>>;
        };
        _input_in: typeof _trpc_server.unsetMarker;
        _input_out: typeof _trpc_server.unsetMarker;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
        _meta: object;
      },
      string
    >;
  }
>;
type AppRouter = typeof appRouter;

declare const USER_ROLES: readonly ['administrator', 'apprentice', 'standard'];

type Square = {
  shape: 'square';
  size: number;
};
type Rectangle = {
  shape: 'rectangle';
  width: number;
  height: number;
};
type Shape = Square | Rectangle;
declare const SharedSquareObject: Shape;

export { type AppRouter, type Shape, SharedSquareObject, USER_ROLES };
