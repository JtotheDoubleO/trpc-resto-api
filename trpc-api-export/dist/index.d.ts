import * as _prisma_client from '.prisma/client';
import * as superjson from 'superjson';
import * as _trpc_server from '@trpc/server';
import * as express from 'express';
import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';

type DeepMutable<T> = {
  -readonly [P in keyof T]: DeepMutable<T[P]>;
};

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
    batch: _trpc_server.CreateRouterInner<
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
        list: _trpc_server.BuildProcedure<
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
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
          },
          never[]
        >;
      }
    >;
    resto: _trpc_server.CreateRouterInner<
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
        list: _trpc_server.BuildProcedure<
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
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
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
                rating: number | null;
                ratingCount: bigint | null;
                city: string;
                category: string;
                priceRange: string;
                desc: string;
                isFavorite: boolean;
              }
            | {
                featured: _prisma_client.Prisma.JsonObject;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                images: string[];
                rating: number | null;
                ratingCount: bigint | null;
                city: string;
                category: string;
                priceRange: string;
                desc: string;
                isFavorite: boolean;
              }
          )[]
        >;
        show: _trpc_server.BuildProcedure<
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
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: string;
            _input_out: string;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          | DeepMutable<{
              id: string;
              isFavorite: boolean;
              images: string[];
              featured: {
                text: string;
                icon: string;
              };
              name: string;
              rating: number;
              ratingCount: number;
              city: string;
              category: string;
              priceRange: string;
              desc: string;
            }>
          | `Restaurant with id:${string} does not exist in database.`
        >;
        destroy: _trpc_server.BuildProcedure<
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
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: {
              id: string;
            };
            _input_out: {
              id: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          DeepMutable<{
            id: string;
            isFavorite: boolean;
            images: string[];
            featured: {
              text: string;
              icon: string;
            };
            name: string;
            rating: number;
            ratingCount: number;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
          }>[]
        >;
        create: _trpc_server.BuildProcedure<
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
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: {
              body: {
                isFavorite: boolean;
                featured: {
                  text: string;
                  icon: string;
                };
                name: string;
                rating: number;
                ratingCount: number;
                city: string;
                category: string;
                priceRange: string;
                desc: string;
                images?: string[] | undefined;
              };
            };
            _input_out: {
              body: {
                isFavorite: boolean;
                images: string[];
                featured: {
                  text: string;
                  icon: string;
                };
                name: string;
                rating: number;
                ratingCount: number;
                city: string;
                category: string;
                priceRange: string;
                desc: string;
              };
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          {
            id: string;
            isFavorite: boolean;
            images: string[];
            featured: {
              text: string;
              icon: string;
            };
            name: string;
            rating: number;
            ratingCount: number;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
          }
        >;
      }
    >;
    util: _trpc_server.CreateRouterInner<
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
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
          },
          'Database initialized successfully.'
        >;
      }
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
