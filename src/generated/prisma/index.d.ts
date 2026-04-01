
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Quote
 * 
 */
export type Quote = $Result.DefaultSelection<Prisma.$QuotePayload>
/**
 * Model QuoteItem
 * 
 */
export type QuoteItem = $Result.DefaultSelection<Prisma.$QuoteItemPayload>
/**
 * Model QuoteAcceptance
 * 
 */
export type QuoteAcceptance = $Result.DefaultSelection<Prisma.$QuoteAcceptancePayload>
/**
 * Model QuoteAcceptanceItem
 * 
 */
export type QuoteAcceptanceItem = $Result.DefaultSelection<Prisma.$QuoteAcceptanceItemPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectItem
 * 
 */
export type ProjectItem = $Result.DefaultSelection<Prisma.$ProjectItemPayload>
/**
 * Model ProjectPayment
 * 
 */
export type ProjectPayment = $Result.DefaultSelection<Prisma.$ProjectPaymentPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model StatusHistory
 * 
 */
export type StatusHistory = $Result.DefaultSelection<Prisma.$StatusHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  sales: 'sales',
  finance: 'finance'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const QuoteStatus: {
  draft: 'draft',
  issued: 'issued',
  sent: 'sent',
  viewed: 'viewed',
  partially_accepted: 'partially_accepted',
  fully_accepted: 'fully_accepted',
  rejected: 'rejected',
  expired: 'expired',
  canceled: 'canceled'
};

export type QuoteStatus = (typeof QuoteStatus)[keyof typeof QuoteStatus]


export const QuoteItemStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type QuoteItemStatus = (typeof QuoteItemStatus)[keyof typeof QuoteItemStatus]


export const AcceptanceType: {
  full: 'full',
  partial: 'partial'
};

export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType]


export const ProjectStatus: {
  pending_start: 'pending_start',
  in_progress: 'in_progress',
  completed: 'completed',
  canceled: 'canceled'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const ProjectItemStatus: {
  pending: 'pending',
  in_progress: 'in_progress',
  completed: 'completed',
  canceled: 'canceled'
};

export type ProjectItemStatus = (typeof ProjectItemStatus)[keyof typeof ProjectItemStatus]


export const PaymentMethod: {
  transfer: 'transfer',
  cash: 'cash',
  card: 'card',
  paypal: 'paypal',
  bank_deposit: 'bank_deposit',
  other: 'other'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const DocumentType: {
  quote_pdf: 'quote_pdf',
  acceptance_pdf: 'acceptance_pdf',
  payment_receipt: 'payment_receipt',
  invoice_pdf: 'invoice_pdf',
  contract: 'contract',
  other: 'other'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const EntityType: {
  quote: 'quote',
  quote_item: 'quote_item',
  project: 'project',
  project_item: 'project_item'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type QuoteStatus = $Enums.QuoteStatus

export const QuoteStatus: typeof $Enums.QuoteStatus

export type QuoteItemStatus = $Enums.QuoteItemStatus

export const QuoteItemStatus: typeof $Enums.QuoteItemStatus

export type AcceptanceType = $Enums.AcceptanceType

export const AcceptanceType: typeof $Enums.AcceptanceType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type ProjectItemStatus = $Enums.ProjectItemStatus

export const ProjectItemStatus: typeof $Enums.ProjectItemStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quote`: Exposes CRUD operations for the **Quote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotes
    * const quotes = await prisma.quote.findMany()
    * ```
    */
  get quote(): Prisma.QuoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteItem`: Exposes CRUD operations for the **QuoteItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteItems
    * const quoteItems = await prisma.quoteItem.findMany()
    * ```
    */
  get quoteItem(): Prisma.QuoteItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteAcceptance`: Exposes CRUD operations for the **QuoteAcceptance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteAcceptances
    * const quoteAcceptances = await prisma.quoteAcceptance.findMany()
    * ```
    */
  get quoteAcceptance(): Prisma.QuoteAcceptanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteAcceptanceItem`: Exposes CRUD operations for the **QuoteAcceptanceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteAcceptanceItems
    * const quoteAcceptanceItems = await prisma.quoteAcceptanceItem.findMany()
    * ```
    */
  get quoteAcceptanceItem(): Prisma.QuoteAcceptanceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectItem`: Exposes CRUD operations for the **ProjectItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectItems
    * const projectItems = await prisma.projectItem.findMany()
    * ```
    */
  get projectItem(): Prisma.ProjectItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectPayment`: Exposes CRUD operations for the **ProjectPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPayments
    * const projectPayments = await prisma.projectPayment.findMany()
    * ```
    */
  get projectPayment(): Prisma.ProjectPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusHistory`: Exposes CRUD operations for the **StatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusHistories
    * const statusHistories = await prisma.statusHistory.findMany()
    * ```
    */
  get statusHistory(): Prisma.StatusHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    Quote: 'Quote',
    QuoteItem: 'QuoteItem',
    QuoteAcceptance: 'QuoteAcceptance',
    QuoteAcceptanceItem: 'QuoteAcceptanceItem',
    Project: 'Project',
    ProjectItem: 'ProjectItem',
    ProjectPayment: 'ProjectPayment',
    Document: 'Document',
    StatusHistory: 'StatusHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "quote" | "quoteItem" | "quoteAcceptance" | "quoteAcceptanceItem" | "project" | "projectItem" | "projectPayment" | "document" | "statusHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Quote: {
        payload: Prisma.$QuotePayload<ExtArgs>
        fields: Prisma.QuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findFirst: {
            args: Prisma.QuoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findMany: {
            args: Prisma.QuoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          create: {
            args: Prisma.QuoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          createMany: {
            args: Prisma.QuoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          update: {
            args: Prisma.QuoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          deleteMany: {
            args: Prisma.QuoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          aggregate: {
            args: Prisma.QuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuote>
          }
          groupBy: {
            args: Prisma.QuoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteCountAggregateOutputType> | number
          }
        }
      }
      QuoteItem: {
        payload: Prisma.$QuoteItemPayload<ExtArgs>
        fields: Prisma.QuoteItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>
          }
          findFirst: {
            args: Prisma.QuoteItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>
          }
          findMany: {
            args: Prisma.QuoteItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>[]
          }
          create: {
            args: Prisma.QuoteItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>
          }
          createMany: {
            args: Prisma.QuoteItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuoteItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>
          }
          update: {
            args: Prisma.QuoteItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>
          }
          deleteMany: {
            args: Prisma.QuoteItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuoteItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteItemPayload>
          }
          aggregate: {
            args: Prisma.QuoteItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteItem>
          }
          groupBy: {
            args: Prisma.QuoteItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteItemCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteItemCountAggregateOutputType> | number
          }
        }
      }
      QuoteAcceptance: {
        payload: Prisma.$QuoteAcceptancePayload<ExtArgs>
        fields: Prisma.QuoteAcceptanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteAcceptanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteAcceptanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>
          }
          findFirst: {
            args: Prisma.QuoteAcceptanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteAcceptanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>
          }
          findMany: {
            args: Prisma.QuoteAcceptanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>[]
          }
          create: {
            args: Prisma.QuoteAcceptanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>
          }
          createMany: {
            args: Prisma.QuoteAcceptanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuoteAcceptanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>
          }
          update: {
            args: Prisma.QuoteAcceptanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>
          }
          deleteMany: {
            args: Prisma.QuoteAcceptanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteAcceptanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuoteAcceptanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptancePayload>
          }
          aggregate: {
            args: Prisma.QuoteAcceptanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteAcceptance>
          }
          groupBy: {
            args: Prisma.QuoteAcceptanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteAcceptanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteAcceptanceCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteAcceptanceCountAggregateOutputType> | number
          }
        }
      }
      QuoteAcceptanceItem: {
        payload: Prisma.$QuoteAcceptanceItemPayload<ExtArgs>
        fields: Prisma.QuoteAcceptanceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteAcceptanceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteAcceptanceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>
          }
          findFirst: {
            args: Prisma.QuoteAcceptanceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteAcceptanceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>
          }
          findMany: {
            args: Prisma.QuoteAcceptanceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>[]
          }
          create: {
            args: Prisma.QuoteAcceptanceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>
          }
          createMany: {
            args: Prisma.QuoteAcceptanceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuoteAcceptanceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>
          }
          update: {
            args: Prisma.QuoteAcceptanceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>
          }
          deleteMany: {
            args: Prisma.QuoteAcceptanceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteAcceptanceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuoteAcceptanceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteAcceptanceItemPayload>
          }
          aggregate: {
            args: Prisma.QuoteAcceptanceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteAcceptanceItem>
          }
          groupBy: {
            args: Prisma.QuoteAcceptanceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteAcceptanceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteAcceptanceItemCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteAcceptanceItemCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectItem: {
        payload: Prisma.$ProjectItemPayload<ExtArgs>
        fields: Prisma.ProjectItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          findFirst: {
            args: Prisma.ProjectItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          findMany: {
            args: Prisma.ProjectItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>[]
          }
          create: {
            args: Prisma.ProjectItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          createMany: {
            args: Prisma.ProjectItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          update: {
            args: Prisma.ProjectItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          deleteMany: {
            args: Prisma.ProjectItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          aggregate: {
            args: Prisma.ProjectItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectItem>
          }
          groupBy: {
            args: Prisma.ProjectItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectItemCountAggregateOutputType> | number
          }
        }
      }
      ProjectPayment: {
        payload: Prisma.$ProjectPaymentPayload<ExtArgs>
        fields: Prisma.ProjectPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>
          }
          findFirst: {
            args: Prisma.ProjectPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>
          }
          findMany: {
            args: Prisma.ProjectPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>[]
          }
          create: {
            args: Prisma.ProjectPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>
          }
          createMany: {
            args: Prisma.ProjectPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>
          }
          update: {
            args: Prisma.ProjectPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>
          }
          deleteMany: {
            args: Prisma.ProjectPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPaymentPayload>
          }
          aggregate: {
            args: Prisma.ProjectPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPayment>
          }
          groupBy: {
            args: Prisma.ProjectPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPaymentCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      StatusHistory: {
        payload: Prisma.$StatusHistoryPayload<ExtArgs>
        fields: Prisma.StatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.StatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          findMany: {
            args: Prisma.StatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>[]
          }
          create: {
            args: Prisma.StatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          createMany: {
            args: Prisma.StatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          update: {
            args: Prisma.StatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.StatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusHistory>
          }
          groupBy: {
            args: Prisma.StatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StatusHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    quote?: QuoteOmit
    quoteItem?: QuoteItemOmit
    quoteAcceptance?: QuoteAcceptanceOmit
    quoteAcceptanceItem?: QuoteAcceptanceItemOmit
    project?: ProjectOmit
    projectItem?: ProjectItemOmit
    projectPayment?: ProjectPaymentOmit
    document?: DocumentOmit
    statusHistory?: StatusHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quotesCreated: number
    paymentsRegistered: number
    documentsUploaded: number
    statusChanges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotesCreated?: boolean | UserCountOutputTypeCountQuotesCreatedArgs
    paymentsRegistered?: boolean | UserCountOutputTypeCountPaymentsRegisteredArgs
    documentsUploaded?: boolean | UserCountOutputTypeCountDocumentsUploadedArgs
    statusChanges?: boolean | UserCountOutputTypeCountStatusChangesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuotesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatusChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusHistoryWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    quotes: number
    projects: number
    documents: number
    acceptances: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | ClientCountOutputTypeCountQuotesArgs
    projects?: boolean | ClientCountOutputTypeCountProjectsArgs
    documents?: boolean | ClientCountOutputTypeCountDocumentsArgs
    acceptances?: boolean | ClientCountOutputTypeCountAcceptancesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAcceptancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteAcceptanceWhereInput
  }


  /**
   * Count Type QuoteCountOutputType
   */

  export type QuoteCountOutputType = {
    items: number
    acceptances: number
    projects: number
    documents: number
  }

  export type QuoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuoteCountOutputTypeCountItemsArgs
    acceptances?: boolean | QuoteCountOutputTypeCountAcceptancesArgs
    projects?: boolean | QuoteCountOutputTypeCountProjectsArgs
    documents?: boolean | QuoteCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteCountOutputType
     */
    select?: QuoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteItemWhereInput
  }

  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeCountAcceptancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteAcceptanceWhereInput
  }

  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type QuoteItemCountOutputType
   */

  export type QuoteItemCountOutputType = {
    acceptanceItems: number
  }

  export type QuoteItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceptanceItems?: boolean | QuoteItemCountOutputTypeCountAcceptanceItemsArgs
  }

  // Custom InputTypes
  /**
   * QuoteItemCountOutputType without action
   */
  export type QuoteItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItemCountOutputType
     */
    select?: QuoteItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuoteItemCountOutputType without action
   */
  export type QuoteItemCountOutputTypeCountAcceptanceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteAcceptanceItemWhereInput
  }


  /**
   * Count Type QuoteAcceptanceCountOutputType
   */

  export type QuoteAcceptanceCountOutputType = {
    items: number
    documents: number
  }

  export type QuoteAcceptanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuoteAcceptanceCountOutputTypeCountItemsArgs
    documents?: boolean | QuoteAcceptanceCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * QuoteAcceptanceCountOutputType without action
   */
  export type QuoteAcceptanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceCountOutputType
     */
    select?: QuoteAcceptanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuoteAcceptanceCountOutputType without action
   */
  export type QuoteAcceptanceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteAcceptanceItemWhereInput
  }

  /**
   * QuoteAcceptanceCountOutputType without action
   */
  export type QuoteAcceptanceCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    items: number
    payments: number
    documents: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProjectCountOutputTypeCountItemsArgs
    payments?: boolean | ProjectCountOutputTypeCountPaymentsArgs
    documents?: boolean | ProjectCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectItemWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPaymentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotesCreated?: boolean | User$quotesCreatedArgs<ExtArgs>
    paymentsRegistered?: boolean | User$paymentsRegisteredArgs<ExtArgs>
    documentsUploaded?: boolean | User$documentsUploadedArgs<ExtArgs>
    statusChanges?: boolean | User$statusChangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotesCreated?: boolean | User$quotesCreatedArgs<ExtArgs>
    paymentsRegistered?: boolean | User$paymentsRegisteredArgs<ExtArgs>
    documentsUploaded?: boolean | User$documentsUploadedArgs<ExtArgs>
    statusChanges?: boolean | User$statusChangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quotesCreated: Prisma.$QuotePayload<ExtArgs>[]
      paymentsRegistered: Prisma.$ProjectPaymentPayload<ExtArgs>[]
      documentsUploaded: Prisma.$DocumentPayload<ExtArgs>[]
      statusChanges: Prisma.$StatusHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotesCreated<T extends User$quotesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$quotesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentsRegistered<T extends User$paymentsRegisteredArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsRegisteredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentsUploaded<T extends User$documentsUploadedArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsUploadedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statusChanges<T extends User$statusChangesArgs<ExtArgs> = {}>(args?: Subset<T, User$statusChangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.quotesCreated
   */
  export type User$quotesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * User.paymentsRegistered
   */
  export type User$paymentsRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    where?: ProjectPaymentWhereInput
    orderBy?: ProjectPaymentOrderByWithRelationInput | ProjectPaymentOrderByWithRelationInput[]
    cursor?: ProjectPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPaymentScalarFieldEnum | ProjectPaymentScalarFieldEnum[]
  }

  /**
   * User.documentsUploaded
   */
  export type User$documentsUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.statusChanges
   */
  export type User$statusChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    where?: StatusHistoryWhereInput
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    cursor?: StatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    businessName: string | null
    contactName: string | null
    email: string | null
    phone: string | null
    address: string | null
    taxId: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    businessName: string | null
    contactName: string | null
    email: string | null
    phone: string | null
    address: string | null
    taxId: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    businessName: number
    contactName: number
    email: number
    phone: number
    address: number
    taxId: number
    passwordHash: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    businessName?: true
    contactName?: true
    email?: true
    phone?: true
    address?: true
    taxId?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    businessName?: true
    contactName?: true
    email?: true
    phone?: true
    address?: true
    taxId?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    businessName?: true
    contactName?: true
    email?: true
    phone?: true
    address?: true
    taxId?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address: string | null
    taxId: string | null
    passwordHash: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    taxId?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotes?: boolean | Client$quotesArgs<ExtArgs>
    projects?: boolean | Client$projectsArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    acceptances?: boolean | Client$acceptancesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>



  export type ClientSelectScalar = {
    id?: boolean
    businessName?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    taxId?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessName" | "contactName" | "email" | "phone" | "address" | "taxId" | "passwordHash" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | Client$quotesArgs<ExtArgs>
    projects?: boolean | Client$projectsArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    acceptances?: boolean | Client$acceptancesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      quotes: Prisma.$QuotePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      acceptances: Prisma.$QuoteAcceptancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessName: string
      contactName: string
      email: string
      phone: string
      address: string | null
      taxId: string | null
      passwordHash: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotes<T extends Client$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Client$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Client$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Client$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Client$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptances<T extends Client$acceptancesArgs<ExtArgs> = {}>(args?: Subset<T, Client$acceptancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly businessName: FieldRef<"Client", 'String'>
    readonly contactName: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly taxId: FieldRef<"Client", 'String'>
    readonly passwordHash: FieldRef<"Client", 'String'>
    readonly isActive: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.quotes
   */
  export type Client$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Client.projects
   */
  export type Client$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Client.documents
   */
  export type Client$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Client.acceptances
   */
  export type Client$acceptancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    where?: QuoteAcceptanceWhereInput
    orderBy?: QuoteAcceptanceOrderByWithRelationInput | QuoteAcceptanceOrderByWithRelationInput[]
    cursor?: QuoteAcceptanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteAcceptanceScalarFieldEnum | QuoteAcceptanceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Quote
   */

  export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null
    _avg: QuoteAvgAggregateOutputType | null
    _sum: QuoteSumAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  export type QuoteAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    createdByUserId: number | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxRate: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type QuoteSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    createdByUserId: number | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxRate: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
  }

  export type QuoteMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    createdByUserId: number | null
    quoteNumber: string | null
    title: string | null
    description: string | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxRate: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    status: $Enums.QuoteStatus | null
    validUntil: Date | null
    issuedAt: Date | null
    sentAt: Date | null
    viewedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuoteMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    createdByUserId: number | null
    quoteNumber: string | null
    title: string | null
    description: string | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    taxRate: Decimal | null
    taxAmount: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    status: $Enums.QuoteStatus | null
    validUntil: Date | null
    issuedAt: Date | null
    sentAt: Date | null
    viewedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuoteCountAggregateOutputType = {
    id: number
    clientId: number
    createdByUserId: number
    quoteNumber: number
    title: number
    description: number
    subtotal: number
    discountAmount: number
    taxRate: number
    taxAmount: number
    totalAmount: number
    currency: number
    status: number
    validUntil: number
    issuedAt: number
    sentAt: number
    viewedAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuoteAvgAggregateInputType = {
    id?: true
    clientId?: true
    createdByUserId?: true
    subtotal?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type QuoteSumAggregateInputType = {
    id?: true
    clientId?: true
    createdByUserId?: true
    subtotal?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type QuoteMinAggregateInputType = {
    id?: true
    clientId?: true
    createdByUserId?: true
    quoteNumber?: true
    title?: true
    description?: true
    subtotal?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    status?: true
    validUntil?: true
    issuedAt?: true
    sentAt?: true
    viewedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuoteMaxAggregateInputType = {
    id?: true
    clientId?: true
    createdByUserId?: true
    quoteNumber?: true
    title?: true
    description?: true
    subtotal?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    status?: true
    validUntil?: true
    issuedAt?: true
    sentAt?: true
    viewedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuoteCountAggregateInputType = {
    id?: true
    clientId?: true
    createdByUserId?: true
    quoteNumber?: true
    title?: true
    description?: true
    subtotal?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    totalAmount?: true
    currency?: true
    status?: true
    validUntil?: true
    issuedAt?: true
    sentAt?: true
    viewedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quote to aggregate.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotes
    **/
    _count?: true | QuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType
  }

  export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote[P]>
      : GetScalarType<T[P], AggregateQuote[P]>
  }




  export type QuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithAggregationInput | QuoteOrderByWithAggregationInput[]
    by: QuoteScalarFieldEnum[] | QuoteScalarFieldEnum
    having?: QuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteCountAggregateInputType | true
    _avg?: QuoteAvgAggregateInputType
    _sum?: QuoteSumAggregateInputType
    _min?: QuoteMinAggregateInputType
    _max?: QuoteMaxAggregateInputType
  }

  export type QuoteGroupByOutputType = {
    id: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description: string | null
    subtotal: Decimal
    discountAmount: Decimal
    taxRate: Decimal
    taxAmount: Decimal
    totalAmount: Decimal
    currency: string
    status: $Enums.QuoteStatus
    validUntil: Date | null
    issuedAt: Date | null
    sentAt: Date | null
    viewedAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuoteCountAggregateOutputType | null
    _avg: QuoteAvgAggregateOutputType | null
    _sum: QuoteSumAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteGroupByOutputType[P]>
        }
      >
    >


  export type QuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    createdByUserId?: boolean
    quoteNumber?: boolean
    title?: boolean
    description?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    validUntil?: boolean
    issuedAt?: boolean
    sentAt?: boolean
    viewedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Quote$itemsArgs<ExtArgs>
    acceptances?: boolean | Quote$acceptancesArgs<ExtArgs>
    projects?: boolean | Quote$projectsArgs<ExtArgs>
    documents?: boolean | Quote$documentsArgs<ExtArgs>
    _count?: boolean | QuoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>



  export type QuoteSelectScalar = {
    id?: boolean
    clientId?: boolean
    createdByUserId?: boolean
    quoteNumber?: boolean
    title?: boolean
    description?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    validUntil?: boolean
    issuedAt?: boolean
    sentAt?: boolean
    viewedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "createdByUserId" | "quoteNumber" | "title" | "description" | "subtotal" | "discountAmount" | "taxRate" | "taxAmount" | "totalAmount" | "currency" | "status" | "validUntil" | "issuedAt" | "sentAt" | "viewedAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["quote"]>
  export type QuoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Quote$itemsArgs<ExtArgs>
    acceptances?: boolean | Quote$acceptancesArgs<ExtArgs>
    projects?: boolean | Quote$projectsArgs<ExtArgs>
    documents?: boolean | Quote$documentsArgs<ExtArgs>
    _count?: boolean | QuoteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quote"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$QuoteItemPayload<ExtArgs>[]
      acceptances: Prisma.$QuoteAcceptancePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      createdByUserId: number
      quoteNumber: string
      title: string
      description: string | null
      subtotal: Prisma.Decimal
      discountAmount: Prisma.Decimal
      taxRate: Prisma.Decimal
      taxAmount: Prisma.Decimal
      totalAmount: Prisma.Decimal
      currency: string
      status: $Enums.QuoteStatus
      validUntil: Date | null
      issuedAt: Date | null
      sentAt: Date | null
      viewedAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quote"]>
    composites: {}
  }

  type QuoteGetPayload<S extends boolean | null | undefined | QuoteDefaultArgs> = $Result.GetResult<Prisma.$QuotePayload, S>

  type QuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteCountAggregateInputType | true
    }

  export interface QuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quote'], meta: { name: 'Quote' } }
    /**
     * Find zero or one Quote that matches the filter.
     * @param {QuoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteFindUniqueArgs>(args: SelectSubset<T, QuoteFindUniqueArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteFindFirstArgs>(args?: SelectSubset<T, QuoteFindFirstArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     * 
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteFindManyArgs>(args?: SelectSubset<T, QuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quote.
     * @param {QuoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     * 
     */
    create<T extends QuoteCreateArgs>(args: SelectSubset<T, QuoteCreateArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quotes.
     * @param {QuoteCreateManyArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteCreateManyArgs>(args?: SelectSubset<T, QuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quote.
     * @param {QuoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     * 
     */
    delete<T extends QuoteDeleteArgs>(args: SelectSubset<T, QuoteDeleteArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quote.
     * @param {QuoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteUpdateArgs>(args: SelectSubset<T, QuoteUpdateArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quotes.
     * @param {QuoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteDeleteManyArgs>(args?: SelectSubset<T, QuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteUpdateManyArgs>(args: SelectSubset<T, QuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quote.
     * @param {QuoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
     */
    upsert<T extends QuoteUpsertArgs>(args: SelectSubset<T, QuoteUpsertArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends QuoteCountArgs>(
      args?: Subset<T, QuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteAggregateArgs>(args: Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>

    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteGroupByArgs['orderBy'] }
        : { orderBy?: QuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quote model
   */
  readonly fields: QuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Quote$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Quote$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptances<T extends Quote$acceptancesArgs<ExtArgs> = {}>(args?: Subset<T, Quote$acceptancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Quote$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Quote$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Quote$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Quote$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quote model
   */
  interface QuoteFieldRefs {
    readonly id: FieldRef<"Quote", 'Int'>
    readonly clientId: FieldRef<"Quote", 'Int'>
    readonly createdByUserId: FieldRef<"Quote", 'Int'>
    readonly quoteNumber: FieldRef<"Quote", 'String'>
    readonly title: FieldRef<"Quote", 'String'>
    readonly description: FieldRef<"Quote", 'String'>
    readonly subtotal: FieldRef<"Quote", 'Decimal'>
    readonly discountAmount: FieldRef<"Quote", 'Decimal'>
    readonly taxRate: FieldRef<"Quote", 'Decimal'>
    readonly taxAmount: FieldRef<"Quote", 'Decimal'>
    readonly totalAmount: FieldRef<"Quote", 'Decimal'>
    readonly currency: FieldRef<"Quote", 'String'>
    readonly status: FieldRef<"Quote", 'QuoteStatus'>
    readonly validUntil: FieldRef<"Quote", 'DateTime'>
    readonly issuedAt: FieldRef<"Quote", 'DateTime'>
    readonly sentAt: FieldRef<"Quote", 'DateTime'>
    readonly viewedAt: FieldRef<"Quote", 'DateTime'>
    readonly notes: FieldRef<"Quote", 'String'>
    readonly createdAt: FieldRef<"Quote", 'DateTime'>
    readonly updatedAt: FieldRef<"Quote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quote findUnique
   */
  export type QuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findUniqueOrThrow
   */
  export type QuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findFirst
   */
  export type QuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findFirstOrThrow
   */
  export type QuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findMany
   */
  export type QuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quotes to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote create
   */
  export type QuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Quote.
     */
    data: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
  }

  /**
   * Quote createMany
   */
  export type QuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quote update
   */
  export type QuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Quote.
     */
    data: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
    /**
     * Choose, which Quote to update.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote updateMany
   */
  export type QuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotes.
     */
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyInput>
    /**
     * Filter which Quotes to update
     */
    where?: QuoteWhereInput
    /**
     * Limit how many Quotes to update.
     */
    limit?: number
  }

  /**
   * Quote upsert
   */
  export type QuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Quote to update in case it exists.
     */
    where: QuoteWhereUniqueInput
    /**
     * In case the Quote found by the `where` argument doesn't exist, create a new Quote with this data.
     */
    create: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
    /**
     * In case the Quote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
  }

  /**
   * Quote delete
   */
  export type QuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter which Quote to delete.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote deleteMany
   */
  export type QuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotes to delete
     */
    where?: QuoteWhereInput
    /**
     * Limit how many Quotes to delete.
     */
    limit?: number
  }

  /**
   * Quote.items
   */
  export type Quote$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    where?: QuoteItemWhereInput
    orderBy?: QuoteItemOrderByWithRelationInput | QuoteItemOrderByWithRelationInput[]
    cursor?: QuoteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteItemScalarFieldEnum | QuoteItemScalarFieldEnum[]
  }

  /**
   * Quote.acceptances
   */
  export type Quote$acceptancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    where?: QuoteAcceptanceWhereInput
    orderBy?: QuoteAcceptanceOrderByWithRelationInput | QuoteAcceptanceOrderByWithRelationInput[]
    cursor?: QuoteAcceptanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteAcceptanceScalarFieldEnum | QuoteAcceptanceScalarFieldEnum[]
  }

  /**
   * Quote.projects
   */
  export type Quote$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Quote.documents
   */
  export type Quote$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Quote without action
   */
  export type QuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
  }


  /**
   * Model QuoteItem
   */

  export type AggregateQuoteItem = {
    _count: QuoteItemCountAggregateOutputType | null
    _avg: QuoteItemAvgAggregateOutputType | null
    _sum: QuoteItemSumAggregateOutputType | null
    _min: QuoteItemMinAggregateOutputType | null
    _max: QuoteItemMaxAggregateOutputType | null
  }

  export type QuoteItemAvgAggregateOutputType = {
    id: number | null
    quoteId: number | null
    itemOrder: number | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type QuoteItemSumAggregateOutputType = {
    id: number | null
    quoteId: number | null
    itemOrder: number | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type QuoteItemMinAggregateOutputType = {
    id: number | null
    quoteId: number | null
    itemOrder: number | null
    title: string | null
    description: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
    status: $Enums.QuoteItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuoteItemMaxAggregateOutputType = {
    id: number | null
    quoteId: number | null
    itemOrder: number | null
    title: string | null
    description: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
    status: $Enums.QuoteItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuoteItemCountAggregateOutputType = {
    id: number
    quoteId: number
    itemOrder: number
    title: number
    description: number
    quantity: number
    unitPrice: number
    subtotal: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuoteItemAvgAggregateInputType = {
    id?: true
    quoteId?: true
    itemOrder?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type QuoteItemSumAggregateInputType = {
    id?: true
    quoteId?: true
    itemOrder?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type QuoteItemMinAggregateInputType = {
    id?: true
    quoteId?: true
    itemOrder?: true
    title?: true
    description?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuoteItemMaxAggregateInputType = {
    id?: true
    quoteId?: true
    itemOrder?: true
    title?: true
    description?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuoteItemCountAggregateInputType = {
    id?: true
    quoteId?: true
    itemOrder?: true
    title?: true
    description?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuoteItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteItem to aggregate.
     */
    where?: QuoteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteItems to fetch.
     */
    orderBy?: QuoteItemOrderByWithRelationInput | QuoteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteItems
    **/
    _count?: true | QuoteItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteItemMaxAggregateInputType
  }

  export type GetQuoteItemAggregateType<T extends QuoteItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteItem[P]>
      : GetScalarType<T[P], AggregateQuoteItem[P]>
  }




  export type QuoteItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteItemWhereInput
    orderBy?: QuoteItemOrderByWithAggregationInput | QuoteItemOrderByWithAggregationInput[]
    by: QuoteItemScalarFieldEnum[] | QuoteItemScalarFieldEnum
    having?: QuoteItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteItemCountAggregateInputType | true
    _avg?: QuoteItemAvgAggregateInputType
    _sum?: QuoteItemSumAggregateInputType
    _min?: QuoteItemMinAggregateInputType
    _max?: QuoteItemMaxAggregateInputType
  }

  export type QuoteItemGroupByOutputType = {
    id: number
    quoteId: number
    itemOrder: number
    title: string
    description: string | null
    quantity: Decimal
    unitPrice: Decimal
    subtotal: Decimal
    status: $Enums.QuoteItemStatus
    createdAt: Date
    updatedAt: Date
    _count: QuoteItemCountAggregateOutputType | null
    _avg: QuoteItemAvgAggregateOutputType | null
    _sum: QuoteItemSumAggregateOutputType | null
    _min: QuoteItemMinAggregateOutputType | null
    _max: QuoteItemMaxAggregateOutputType | null
  }

  type GetQuoteItemGroupByPayload<T extends QuoteItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteItemGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteItemGroupByOutputType[P]>
        }
      >
    >


  export type QuoteItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteId?: boolean
    itemOrder?: boolean
    title?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
    acceptanceItems?: boolean | QuoteItem$acceptanceItemsArgs<ExtArgs>
    _count?: boolean | QuoteItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteItem"]>



  export type QuoteItemSelectScalar = {
    id?: boolean
    quoteId?: boolean
    itemOrder?: boolean
    title?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuoteItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quoteId" | "itemOrder" | "title" | "description" | "quantity" | "unitPrice" | "subtotal" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["quoteItem"]>
  export type QuoteItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
    acceptanceItems?: boolean | QuoteItem$acceptanceItemsArgs<ExtArgs>
    _count?: boolean | QuoteItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuoteItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteItem"
    objects: {
      quote: Prisma.$QuotePayload<ExtArgs>
      acceptanceItems: Prisma.$QuoteAcceptanceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quoteId: number
      itemOrder: number
      title: string
      description: string | null
      quantity: Prisma.Decimal
      unitPrice: Prisma.Decimal
      subtotal: Prisma.Decimal
      status: $Enums.QuoteItemStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quoteItem"]>
    composites: {}
  }

  type QuoteItemGetPayload<S extends boolean | null | undefined | QuoteItemDefaultArgs> = $Result.GetResult<Prisma.$QuoteItemPayload, S>

  type QuoteItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteItemCountAggregateInputType | true
    }

  export interface QuoteItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteItem'], meta: { name: 'QuoteItem' } }
    /**
     * Find zero or one QuoteItem that matches the filter.
     * @param {QuoteItemFindUniqueArgs} args - Arguments to find a QuoteItem
     * @example
     * // Get one QuoteItem
     * const quoteItem = await prisma.quoteItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteItemFindUniqueArgs>(args: SelectSubset<T, QuoteItemFindUniqueArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteItemFindUniqueOrThrowArgs} args - Arguments to find a QuoteItem
     * @example
     * // Get one QuoteItem
     * const quoteItem = await prisma.quoteItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteItemFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemFindFirstArgs} args - Arguments to find a QuoteItem
     * @example
     * // Get one QuoteItem
     * const quoteItem = await prisma.quoteItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteItemFindFirstArgs>(args?: SelectSubset<T, QuoteItemFindFirstArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemFindFirstOrThrowArgs} args - Arguments to find a QuoteItem
     * @example
     * // Get one QuoteItem
     * const quoteItem = await prisma.quoteItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteItemFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteItems
     * const quoteItems = await prisma.quoteItem.findMany()
     * 
     * // Get first 10 QuoteItems
     * const quoteItems = await prisma.quoteItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteItemWithIdOnly = await prisma.quoteItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteItemFindManyArgs>(args?: SelectSubset<T, QuoteItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteItem.
     * @param {QuoteItemCreateArgs} args - Arguments to create a QuoteItem.
     * @example
     * // Create one QuoteItem
     * const QuoteItem = await prisma.quoteItem.create({
     *   data: {
     *     // ... data to create a QuoteItem
     *   }
     * })
     * 
     */
    create<T extends QuoteItemCreateArgs>(args: SelectSubset<T, QuoteItemCreateArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteItems.
     * @param {QuoteItemCreateManyArgs} args - Arguments to create many QuoteItems.
     * @example
     * // Create many QuoteItems
     * const quoteItem = await prisma.quoteItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteItemCreateManyArgs>(args?: SelectSubset<T, QuoteItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuoteItem.
     * @param {QuoteItemDeleteArgs} args - Arguments to delete one QuoteItem.
     * @example
     * // Delete one QuoteItem
     * const QuoteItem = await prisma.quoteItem.delete({
     *   where: {
     *     // ... filter to delete one QuoteItem
     *   }
     * })
     * 
     */
    delete<T extends QuoteItemDeleteArgs>(args: SelectSubset<T, QuoteItemDeleteArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteItem.
     * @param {QuoteItemUpdateArgs} args - Arguments to update one QuoteItem.
     * @example
     * // Update one QuoteItem
     * const quoteItem = await prisma.quoteItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteItemUpdateArgs>(args: SelectSubset<T, QuoteItemUpdateArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteItems.
     * @param {QuoteItemDeleteManyArgs} args - Arguments to filter QuoteItems to delete.
     * @example
     * // Delete a few QuoteItems
     * const { count } = await prisma.quoteItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteItemDeleteManyArgs>(args?: SelectSubset<T, QuoteItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteItems
     * const quoteItem = await prisma.quoteItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteItemUpdateManyArgs>(args: SelectSubset<T, QuoteItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuoteItem.
     * @param {QuoteItemUpsertArgs} args - Arguments to update or create a QuoteItem.
     * @example
     * // Update or create a QuoteItem
     * const quoteItem = await prisma.quoteItem.upsert({
     *   create: {
     *     // ... data to create a QuoteItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteItem we want to update
     *   }
     * })
     */
    upsert<T extends QuoteItemUpsertArgs>(args: SelectSubset<T, QuoteItemUpsertArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemCountArgs} args - Arguments to filter QuoteItems to count.
     * @example
     * // Count the number of QuoteItems
     * const count = await prisma.quoteItem.count({
     *   where: {
     *     // ... the filter for the QuoteItems we want to count
     *   }
     * })
    **/
    count<T extends QuoteItemCountArgs>(
      args?: Subset<T, QuoteItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteItemAggregateArgs>(args: Subset<T, QuoteItemAggregateArgs>): Prisma.PrismaPromise<GetQuoteItemAggregateType<T>>

    /**
     * Group by QuoteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteItemGroupByArgs['orderBy'] }
        : { orderBy?: QuoteItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteItem model
   */
  readonly fields: QuoteItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quote<T extends QuoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteDefaultArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acceptanceItems<T extends QuoteItem$acceptanceItemsArgs<ExtArgs> = {}>(args?: Subset<T, QuoteItem$acceptanceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteItem model
   */
  interface QuoteItemFieldRefs {
    readonly id: FieldRef<"QuoteItem", 'Int'>
    readonly quoteId: FieldRef<"QuoteItem", 'Int'>
    readonly itemOrder: FieldRef<"QuoteItem", 'Int'>
    readonly title: FieldRef<"QuoteItem", 'String'>
    readonly description: FieldRef<"QuoteItem", 'String'>
    readonly quantity: FieldRef<"QuoteItem", 'Decimal'>
    readonly unitPrice: FieldRef<"QuoteItem", 'Decimal'>
    readonly subtotal: FieldRef<"QuoteItem", 'Decimal'>
    readonly status: FieldRef<"QuoteItem", 'QuoteItemStatus'>
    readonly createdAt: FieldRef<"QuoteItem", 'DateTime'>
    readonly updatedAt: FieldRef<"QuoteItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteItem findUnique
   */
  export type QuoteItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteItem to fetch.
     */
    where: QuoteItemWhereUniqueInput
  }

  /**
   * QuoteItem findUniqueOrThrow
   */
  export type QuoteItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteItem to fetch.
     */
    where: QuoteItemWhereUniqueInput
  }

  /**
   * QuoteItem findFirst
   */
  export type QuoteItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteItem to fetch.
     */
    where?: QuoteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteItems to fetch.
     */
    orderBy?: QuoteItemOrderByWithRelationInput | QuoteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteItems.
     */
    cursor?: QuoteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteItems.
     */
    distinct?: QuoteItemScalarFieldEnum | QuoteItemScalarFieldEnum[]
  }

  /**
   * QuoteItem findFirstOrThrow
   */
  export type QuoteItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteItem to fetch.
     */
    where?: QuoteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteItems to fetch.
     */
    orderBy?: QuoteItemOrderByWithRelationInput | QuoteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteItems.
     */
    cursor?: QuoteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteItems.
     */
    distinct?: QuoteItemScalarFieldEnum | QuoteItemScalarFieldEnum[]
  }

  /**
   * QuoteItem findMany
   */
  export type QuoteItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteItems to fetch.
     */
    where?: QuoteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteItems to fetch.
     */
    orderBy?: QuoteItemOrderByWithRelationInput | QuoteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteItems.
     */
    cursor?: QuoteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteItems.
     */
    skip?: number
    distinct?: QuoteItemScalarFieldEnum | QuoteItemScalarFieldEnum[]
  }

  /**
   * QuoteItem create
   */
  export type QuoteItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteItem.
     */
    data: XOR<QuoteItemCreateInput, QuoteItemUncheckedCreateInput>
  }

  /**
   * QuoteItem createMany
   */
  export type QuoteItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteItems.
     */
    data: QuoteItemCreateManyInput | QuoteItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteItem update
   */
  export type QuoteItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteItem.
     */
    data: XOR<QuoteItemUpdateInput, QuoteItemUncheckedUpdateInput>
    /**
     * Choose, which QuoteItem to update.
     */
    where: QuoteItemWhereUniqueInput
  }

  /**
   * QuoteItem updateMany
   */
  export type QuoteItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteItems.
     */
    data: XOR<QuoteItemUpdateManyMutationInput, QuoteItemUncheckedUpdateManyInput>
    /**
     * Filter which QuoteItems to update
     */
    where?: QuoteItemWhereInput
    /**
     * Limit how many QuoteItems to update.
     */
    limit?: number
  }

  /**
   * QuoteItem upsert
   */
  export type QuoteItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteItem to update in case it exists.
     */
    where: QuoteItemWhereUniqueInput
    /**
     * In case the QuoteItem found by the `where` argument doesn't exist, create a new QuoteItem with this data.
     */
    create: XOR<QuoteItemCreateInput, QuoteItemUncheckedCreateInput>
    /**
     * In case the QuoteItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteItemUpdateInput, QuoteItemUncheckedUpdateInput>
  }

  /**
   * QuoteItem delete
   */
  export type QuoteItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
    /**
     * Filter which QuoteItem to delete.
     */
    where: QuoteItemWhereUniqueInput
  }

  /**
   * QuoteItem deleteMany
   */
  export type QuoteItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteItems to delete
     */
    where?: QuoteItemWhereInput
    /**
     * Limit how many QuoteItems to delete.
     */
    limit?: number
  }

  /**
   * QuoteItem.acceptanceItems
   */
  export type QuoteItem$acceptanceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    where?: QuoteAcceptanceItemWhereInput
    orderBy?: QuoteAcceptanceItemOrderByWithRelationInput | QuoteAcceptanceItemOrderByWithRelationInput[]
    cursor?: QuoteAcceptanceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteAcceptanceItemScalarFieldEnum | QuoteAcceptanceItemScalarFieldEnum[]
  }

  /**
   * QuoteItem without action
   */
  export type QuoteItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteItem
     */
    select?: QuoteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteItem
     */
    omit?: QuoteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteItemInclude<ExtArgs> | null
  }


  /**
   * Model QuoteAcceptance
   */

  export type AggregateQuoteAcceptance = {
    _count: QuoteAcceptanceCountAggregateOutputType | null
    _avg: QuoteAcceptanceAvgAggregateOutputType | null
    _sum: QuoteAcceptanceSumAggregateOutputType | null
    _min: QuoteAcceptanceMinAggregateOutputType | null
    _max: QuoteAcceptanceMaxAggregateOutputType | null
  }

  export type QuoteAcceptanceAvgAggregateOutputType = {
    id: number | null
    quoteId: number | null
    clientId: number | null
    acceptedTotalAmount: Decimal | null
  }

  export type QuoteAcceptanceSumAggregateOutputType = {
    id: number | null
    quoteId: number | null
    clientId: number | null
    acceptedTotalAmount: Decimal | null
  }

  export type QuoteAcceptanceMinAggregateOutputType = {
    id: number | null
    quoteId: number | null
    clientId: number | null
    acceptanceType: $Enums.AcceptanceType | null
    acceptedTotalAmount: Decimal | null
    acceptedAt: Date | null
    clientIp: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuoteAcceptanceMaxAggregateOutputType = {
    id: number | null
    quoteId: number | null
    clientId: number | null
    acceptanceType: $Enums.AcceptanceType | null
    acceptedTotalAmount: Decimal | null
    acceptedAt: Date | null
    clientIp: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuoteAcceptanceCountAggregateOutputType = {
    id: number
    quoteId: number
    clientId: number
    acceptanceType: number
    acceptedTotalAmount: number
    acceptedAt: number
    clientIp: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuoteAcceptanceAvgAggregateInputType = {
    id?: true
    quoteId?: true
    clientId?: true
    acceptedTotalAmount?: true
  }

  export type QuoteAcceptanceSumAggregateInputType = {
    id?: true
    quoteId?: true
    clientId?: true
    acceptedTotalAmount?: true
  }

  export type QuoteAcceptanceMinAggregateInputType = {
    id?: true
    quoteId?: true
    clientId?: true
    acceptanceType?: true
    acceptedTotalAmount?: true
    acceptedAt?: true
    clientIp?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuoteAcceptanceMaxAggregateInputType = {
    id?: true
    quoteId?: true
    clientId?: true
    acceptanceType?: true
    acceptedTotalAmount?: true
    acceptedAt?: true
    clientIp?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuoteAcceptanceCountAggregateInputType = {
    id?: true
    quoteId?: true
    clientId?: true
    acceptanceType?: true
    acceptedTotalAmount?: true
    acceptedAt?: true
    clientIp?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuoteAcceptanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteAcceptance to aggregate.
     */
    where?: QuoteAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptances to fetch.
     */
    orderBy?: QuoteAcceptanceOrderByWithRelationInput | QuoteAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteAcceptances
    **/
    _count?: true | QuoteAcceptanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteAcceptanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteAcceptanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteAcceptanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteAcceptanceMaxAggregateInputType
  }

  export type GetQuoteAcceptanceAggregateType<T extends QuoteAcceptanceAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteAcceptance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteAcceptance[P]>
      : GetScalarType<T[P], AggregateQuoteAcceptance[P]>
  }




  export type QuoteAcceptanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteAcceptanceWhereInput
    orderBy?: QuoteAcceptanceOrderByWithAggregationInput | QuoteAcceptanceOrderByWithAggregationInput[]
    by: QuoteAcceptanceScalarFieldEnum[] | QuoteAcceptanceScalarFieldEnum
    having?: QuoteAcceptanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteAcceptanceCountAggregateInputType | true
    _avg?: QuoteAcceptanceAvgAggregateInputType
    _sum?: QuoteAcceptanceSumAggregateInputType
    _min?: QuoteAcceptanceMinAggregateInputType
    _max?: QuoteAcceptanceMaxAggregateInputType
  }

  export type QuoteAcceptanceGroupByOutputType = {
    id: number
    quoteId: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal
    acceptedAt: Date
    clientIp: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuoteAcceptanceCountAggregateOutputType | null
    _avg: QuoteAcceptanceAvgAggregateOutputType | null
    _sum: QuoteAcceptanceSumAggregateOutputType | null
    _min: QuoteAcceptanceMinAggregateOutputType | null
    _max: QuoteAcceptanceMaxAggregateOutputType | null
  }

  type GetQuoteAcceptanceGroupByPayload<T extends QuoteAcceptanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteAcceptanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteAcceptanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteAcceptanceGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteAcceptanceGroupByOutputType[P]>
        }
      >
    >


  export type QuoteAcceptanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteId?: boolean
    clientId?: boolean
    acceptanceType?: boolean
    acceptedTotalAmount?: boolean
    acceptedAt?: boolean
    clientIp?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    items?: boolean | QuoteAcceptance$itemsArgs<ExtArgs>
    project?: boolean | QuoteAcceptance$projectArgs<ExtArgs>
    documents?: boolean | QuoteAcceptance$documentsArgs<ExtArgs>
    _count?: boolean | QuoteAcceptanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteAcceptance"]>



  export type QuoteAcceptanceSelectScalar = {
    id?: boolean
    quoteId?: boolean
    clientId?: boolean
    acceptanceType?: boolean
    acceptedTotalAmount?: boolean
    acceptedAt?: boolean
    clientIp?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuoteAcceptanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quoteId" | "clientId" | "acceptanceType" | "acceptedTotalAmount" | "acceptedAt" | "clientIp" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["quoteAcceptance"]>
  export type QuoteAcceptanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    items?: boolean | QuoteAcceptance$itemsArgs<ExtArgs>
    project?: boolean | QuoteAcceptance$projectArgs<ExtArgs>
    documents?: boolean | QuoteAcceptance$documentsArgs<ExtArgs>
    _count?: boolean | QuoteAcceptanceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuoteAcceptancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteAcceptance"
    objects: {
      quote: Prisma.$QuotePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      items: Prisma.$QuoteAcceptanceItemPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quoteId: number
      clientId: number
      acceptanceType: $Enums.AcceptanceType
      acceptedTotalAmount: Prisma.Decimal
      acceptedAt: Date
      clientIp: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quoteAcceptance"]>
    composites: {}
  }

  type QuoteAcceptanceGetPayload<S extends boolean | null | undefined | QuoteAcceptanceDefaultArgs> = $Result.GetResult<Prisma.$QuoteAcceptancePayload, S>

  type QuoteAcceptanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteAcceptanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteAcceptanceCountAggregateInputType | true
    }

  export interface QuoteAcceptanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteAcceptance'], meta: { name: 'QuoteAcceptance' } }
    /**
     * Find zero or one QuoteAcceptance that matches the filter.
     * @param {QuoteAcceptanceFindUniqueArgs} args - Arguments to find a QuoteAcceptance
     * @example
     * // Get one QuoteAcceptance
     * const quoteAcceptance = await prisma.quoteAcceptance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteAcceptanceFindUniqueArgs>(args: SelectSubset<T, QuoteAcceptanceFindUniqueArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteAcceptance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteAcceptanceFindUniqueOrThrowArgs} args - Arguments to find a QuoteAcceptance
     * @example
     * // Get one QuoteAcceptance
     * const quoteAcceptance = await prisma.quoteAcceptance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteAcceptanceFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteAcceptanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteAcceptance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceFindFirstArgs} args - Arguments to find a QuoteAcceptance
     * @example
     * // Get one QuoteAcceptance
     * const quoteAcceptance = await prisma.quoteAcceptance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteAcceptanceFindFirstArgs>(args?: SelectSubset<T, QuoteAcceptanceFindFirstArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteAcceptance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceFindFirstOrThrowArgs} args - Arguments to find a QuoteAcceptance
     * @example
     * // Get one QuoteAcceptance
     * const quoteAcceptance = await prisma.quoteAcceptance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteAcceptanceFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteAcceptanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteAcceptances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteAcceptances
     * const quoteAcceptances = await prisma.quoteAcceptance.findMany()
     * 
     * // Get first 10 QuoteAcceptances
     * const quoteAcceptances = await prisma.quoteAcceptance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteAcceptanceWithIdOnly = await prisma.quoteAcceptance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteAcceptanceFindManyArgs>(args?: SelectSubset<T, QuoteAcceptanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteAcceptance.
     * @param {QuoteAcceptanceCreateArgs} args - Arguments to create a QuoteAcceptance.
     * @example
     * // Create one QuoteAcceptance
     * const QuoteAcceptance = await prisma.quoteAcceptance.create({
     *   data: {
     *     // ... data to create a QuoteAcceptance
     *   }
     * })
     * 
     */
    create<T extends QuoteAcceptanceCreateArgs>(args: SelectSubset<T, QuoteAcceptanceCreateArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteAcceptances.
     * @param {QuoteAcceptanceCreateManyArgs} args - Arguments to create many QuoteAcceptances.
     * @example
     * // Create many QuoteAcceptances
     * const quoteAcceptance = await prisma.quoteAcceptance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteAcceptanceCreateManyArgs>(args?: SelectSubset<T, QuoteAcceptanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuoteAcceptance.
     * @param {QuoteAcceptanceDeleteArgs} args - Arguments to delete one QuoteAcceptance.
     * @example
     * // Delete one QuoteAcceptance
     * const QuoteAcceptance = await prisma.quoteAcceptance.delete({
     *   where: {
     *     // ... filter to delete one QuoteAcceptance
     *   }
     * })
     * 
     */
    delete<T extends QuoteAcceptanceDeleteArgs>(args: SelectSubset<T, QuoteAcceptanceDeleteArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteAcceptance.
     * @param {QuoteAcceptanceUpdateArgs} args - Arguments to update one QuoteAcceptance.
     * @example
     * // Update one QuoteAcceptance
     * const quoteAcceptance = await prisma.quoteAcceptance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteAcceptanceUpdateArgs>(args: SelectSubset<T, QuoteAcceptanceUpdateArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteAcceptances.
     * @param {QuoteAcceptanceDeleteManyArgs} args - Arguments to filter QuoteAcceptances to delete.
     * @example
     * // Delete a few QuoteAcceptances
     * const { count } = await prisma.quoteAcceptance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteAcceptanceDeleteManyArgs>(args?: SelectSubset<T, QuoteAcceptanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteAcceptances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteAcceptances
     * const quoteAcceptance = await prisma.quoteAcceptance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteAcceptanceUpdateManyArgs>(args: SelectSubset<T, QuoteAcceptanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuoteAcceptance.
     * @param {QuoteAcceptanceUpsertArgs} args - Arguments to update or create a QuoteAcceptance.
     * @example
     * // Update or create a QuoteAcceptance
     * const quoteAcceptance = await prisma.quoteAcceptance.upsert({
     *   create: {
     *     // ... data to create a QuoteAcceptance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteAcceptance we want to update
     *   }
     * })
     */
    upsert<T extends QuoteAcceptanceUpsertArgs>(args: SelectSubset<T, QuoteAcceptanceUpsertArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteAcceptances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceCountArgs} args - Arguments to filter QuoteAcceptances to count.
     * @example
     * // Count the number of QuoteAcceptances
     * const count = await prisma.quoteAcceptance.count({
     *   where: {
     *     // ... the filter for the QuoteAcceptances we want to count
     *   }
     * })
    **/
    count<T extends QuoteAcceptanceCountArgs>(
      args?: Subset<T, QuoteAcceptanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteAcceptanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteAcceptance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteAcceptanceAggregateArgs>(args: Subset<T, QuoteAcceptanceAggregateArgs>): Prisma.PrismaPromise<GetQuoteAcceptanceAggregateType<T>>

    /**
     * Group by QuoteAcceptance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteAcceptanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteAcceptanceGroupByArgs['orderBy'] }
        : { orderBy?: QuoteAcceptanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteAcceptanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteAcceptanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteAcceptance model
   */
  readonly fields: QuoteAcceptanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteAcceptance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteAcceptanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quote<T extends QuoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteDefaultArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends QuoteAcceptance$itemsArgs<ExtArgs> = {}>(args?: Subset<T, QuoteAcceptance$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends QuoteAcceptance$projectArgs<ExtArgs> = {}>(args?: Subset<T, QuoteAcceptance$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends QuoteAcceptance$documentsArgs<ExtArgs> = {}>(args?: Subset<T, QuoteAcceptance$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteAcceptance model
   */
  interface QuoteAcceptanceFieldRefs {
    readonly id: FieldRef<"QuoteAcceptance", 'Int'>
    readonly quoteId: FieldRef<"QuoteAcceptance", 'Int'>
    readonly clientId: FieldRef<"QuoteAcceptance", 'Int'>
    readonly acceptanceType: FieldRef<"QuoteAcceptance", 'AcceptanceType'>
    readonly acceptedTotalAmount: FieldRef<"QuoteAcceptance", 'Decimal'>
    readonly acceptedAt: FieldRef<"QuoteAcceptance", 'DateTime'>
    readonly clientIp: FieldRef<"QuoteAcceptance", 'String'>
    readonly notes: FieldRef<"QuoteAcceptance", 'String'>
    readonly createdAt: FieldRef<"QuoteAcceptance", 'DateTime'>
    readonly updatedAt: FieldRef<"QuoteAcceptance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteAcceptance findUnique
   */
  export type QuoteAcceptanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptance to fetch.
     */
    where: QuoteAcceptanceWhereUniqueInput
  }

  /**
   * QuoteAcceptance findUniqueOrThrow
   */
  export type QuoteAcceptanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptance to fetch.
     */
    where: QuoteAcceptanceWhereUniqueInput
  }

  /**
   * QuoteAcceptance findFirst
   */
  export type QuoteAcceptanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptance to fetch.
     */
    where?: QuoteAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptances to fetch.
     */
    orderBy?: QuoteAcceptanceOrderByWithRelationInput | QuoteAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteAcceptances.
     */
    cursor?: QuoteAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteAcceptances.
     */
    distinct?: QuoteAcceptanceScalarFieldEnum | QuoteAcceptanceScalarFieldEnum[]
  }

  /**
   * QuoteAcceptance findFirstOrThrow
   */
  export type QuoteAcceptanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptance to fetch.
     */
    where?: QuoteAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptances to fetch.
     */
    orderBy?: QuoteAcceptanceOrderByWithRelationInput | QuoteAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteAcceptances.
     */
    cursor?: QuoteAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteAcceptances.
     */
    distinct?: QuoteAcceptanceScalarFieldEnum | QuoteAcceptanceScalarFieldEnum[]
  }

  /**
   * QuoteAcceptance findMany
   */
  export type QuoteAcceptanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptances to fetch.
     */
    where?: QuoteAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptances to fetch.
     */
    orderBy?: QuoteAcceptanceOrderByWithRelationInput | QuoteAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteAcceptances.
     */
    cursor?: QuoteAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptances.
     */
    skip?: number
    distinct?: QuoteAcceptanceScalarFieldEnum | QuoteAcceptanceScalarFieldEnum[]
  }

  /**
   * QuoteAcceptance create
   */
  export type QuoteAcceptanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteAcceptance.
     */
    data: XOR<QuoteAcceptanceCreateInput, QuoteAcceptanceUncheckedCreateInput>
  }

  /**
   * QuoteAcceptance createMany
   */
  export type QuoteAcceptanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteAcceptances.
     */
    data: QuoteAcceptanceCreateManyInput | QuoteAcceptanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteAcceptance update
   */
  export type QuoteAcceptanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteAcceptance.
     */
    data: XOR<QuoteAcceptanceUpdateInput, QuoteAcceptanceUncheckedUpdateInput>
    /**
     * Choose, which QuoteAcceptance to update.
     */
    where: QuoteAcceptanceWhereUniqueInput
  }

  /**
   * QuoteAcceptance updateMany
   */
  export type QuoteAcceptanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteAcceptances.
     */
    data: XOR<QuoteAcceptanceUpdateManyMutationInput, QuoteAcceptanceUncheckedUpdateManyInput>
    /**
     * Filter which QuoteAcceptances to update
     */
    where?: QuoteAcceptanceWhereInput
    /**
     * Limit how many QuoteAcceptances to update.
     */
    limit?: number
  }

  /**
   * QuoteAcceptance upsert
   */
  export type QuoteAcceptanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteAcceptance to update in case it exists.
     */
    where: QuoteAcceptanceWhereUniqueInput
    /**
     * In case the QuoteAcceptance found by the `where` argument doesn't exist, create a new QuoteAcceptance with this data.
     */
    create: XOR<QuoteAcceptanceCreateInput, QuoteAcceptanceUncheckedCreateInput>
    /**
     * In case the QuoteAcceptance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteAcceptanceUpdateInput, QuoteAcceptanceUncheckedUpdateInput>
  }

  /**
   * QuoteAcceptance delete
   */
  export type QuoteAcceptanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    /**
     * Filter which QuoteAcceptance to delete.
     */
    where: QuoteAcceptanceWhereUniqueInput
  }

  /**
   * QuoteAcceptance deleteMany
   */
  export type QuoteAcceptanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteAcceptances to delete
     */
    where?: QuoteAcceptanceWhereInput
    /**
     * Limit how many QuoteAcceptances to delete.
     */
    limit?: number
  }

  /**
   * QuoteAcceptance.items
   */
  export type QuoteAcceptance$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    where?: QuoteAcceptanceItemWhereInput
    orderBy?: QuoteAcceptanceItemOrderByWithRelationInput | QuoteAcceptanceItemOrderByWithRelationInput[]
    cursor?: QuoteAcceptanceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteAcceptanceItemScalarFieldEnum | QuoteAcceptanceItemScalarFieldEnum[]
  }

  /**
   * QuoteAcceptance.project
   */
  export type QuoteAcceptance$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * QuoteAcceptance.documents
   */
  export type QuoteAcceptance$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * QuoteAcceptance without action
   */
  export type QuoteAcceptanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
  }


  /**
   * Model QuoteAcceptanceItem
   */

  export type AggregateQuoteAcceptanceItem = {
    _count: QuoteAcceptanceItemCountAggregateOutputType | null
    _avg: QuoteAcceptanceItemAvgAggregateOutputType | null
    _sum: QuoteAcceptanceItemSumAggregateOutputType | null
    _min: QuoteAcceptanceItemMinAggregateOutputType | null
    _max: QuoteAcceptanceItemMaxAggregateOutputType | null
  }

  export type QuoteAcceptanceItemAvgAggregateOutputType = {
    id: number | null
    quoteAcceptanceId: number | null
    quoteItemId: number | null
    acceptedPrice: Decimal | null
  }

  export type QuoteAcceptanceItemSumAggregateOutputType = {
    id: number | null
    quoteAcceptanceId: number | null
    quoteItemId: number | null
    acceptedPrice: Decimal | null
  }

  export type QuoteAcceptanceItemMinAggregateOutputType = {
    id: number | null
    quoteAcceptanceId: number | null
    quoteItemId: number | null
    acceptedPrice: Decimal | null
    createdAt: Date | null
  }

  export type QuoteAcceptanceItemMaxAggregateOutputType = {
    id: number | null
    quoteAcceptanceId: number | null
    quoteItemId: number | null
    acceptedPrice: Decimal | null
    createdAt: Date | null
  }

  export type QuoteAcceptanceItemCountAggregateOutputType = {
    id: number
    quoteAcceptanceId: number
    quoteItemId: number
    acceptedPrice: number
    createdAt: number
    _all: number
  }


  export type QuoteAcceptanceItemAvgAggregateInputType = {
    id?: true
    quoteAcceptanceId?: true
    quoteItemId?: true
    acceptedPrice?: true
  }

  export type QuoteAcceptanceItemSumAggregateInputType = {
    id?: true
    quoteAcceptanceId?: true
    quoteItemId?: true
    acceptedPrice?: true
  }

  export type QuoteAcceptanceItemMinAggregateInputType = {
    id?: true
    quoteAcceptanceId?: true
    quoteItemId?: true
    acceptedPrice?: true
    createdAt?: true
  }

  export type QuoteAcceptanceItemMaxAggregateInputType = {
    id?: true
    quoteAcceptanceId?: true
    quoteItemId?: true
    acceptedPrice?: true
    createdAt?: true
  }

  export type QuoteAcceptanceItemCountAggregateInputType = {
    id?: true
    quoteAcceptanceId?: true
    quoteItemId?: true
    acceptedPrice?: true
    createdAt?: true
    _all?: true
  }

  export type QuoteAcceptanceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteAcceptanceItem to aggregate.
     */
    where?: QuoteAcceptanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptanceItems to fetch.
     */
    orderBy?: QuoteAcceptanceItemOrderByWithRelationInput | QuoteAcceptanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteAcceptanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptanceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteAcceptanceItems
    **/
    _count?: true | QuoteAcceptanceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteAcceptanceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteAcceptanceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteAcceptanceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteAcceptanceItemMaxAggregateInputType
  }

  export type GetQuoteAcceptanceItemAggregateType<T extends QuoteAcceptanceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteAcceptanceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteAcceptanceItem[P]>
      : GetScalarType<T[P], AggregateQuoteAcceptanceItem[P]>
  }




  export type QuoteAcceptanceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteAcceptanceItemWhereInput
    orderBy?: QuoteAcceptanceItemOrderByWithAggregationInput | QuoteAcceptanceItemOrderByWithAggregationInput[]
    by: QuoteAcceptanceItemScalarFieldEnum[] | QuoteAcceptanceItemScalarFieldEnum
    having?: QuoteAcceptanceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteAcceptanceItemCountAggregateInputType | true
    _avg?: QuoteAcceptanceItemAvgAggregateInputType
    _sum?: QuoteAcceptanceItemSumAggregateInputType
    _min?: QuoteAcceptanceItemMinAggregateInputType
    _max?: QuoteAcceptanceItemMaxAggregateInputType
  }

  export type QuoteAcceptanceItemGroupByOutputType = {
    id: number
    quoteAcceptanceId: number
    quoteItemId: number
    acceptedPrice: Decimal
    createdAt: Date
    _count: QuoteAcceptanceItemCountAggregateOutputType | null
    _avg: QuoteAcceptanceItemAvgAggregateOutputType | null
    _sum: QuoteAcceptanceItemSumAggregateOutputType | null
    _min: QuoteAcceptanceItemMinAggregateOutputType | null
    _max: QuoteAcceptanceItemMaxAggregateOutputType | null
  }

  type GetQuoteAcceptanceItemGroupByPayload<T extends QuoteAcceptanceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteAcceptanceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteAcceptanceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteAcceptanceItemGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteAcceptanceItemGroupByOutputType[P]>
        }
      >
    >


  export type QuoteAcceptanceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteAcceptanceId?: boolean
    quoteItemId?: boolean
    acceptedPrice?: boolean
    createdAt?: boolean
    acceptance?: boolean | QuoteAcceptanceDefaultArgs<ExtArgs>
    quoteItem?: boolean | QuoteItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteAcceptanceItem"]>



  export type QuoteAcceptanceItemSelectScalar = {
    id?: boolean
    quoteAcceptanceId?: boolean
    quoteItemId?: boolean
    acceptedPrice?: boolean
    createdAt?: boolean
  }

  export type QuoteAcceptanceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quoteAcceptanceId" | "quoteItemId" | "acceptedPrice" | "createdAt", ExtArgs["result"]["quoteAcceptanceItem"]>
  export type QuoteAcceptanceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceptance?: boolean | QuoteAcceptanceDefaultArgs<ExtArgs>
    quoteItem?: boolean | QuoteItemDefaultArgs<ExtArgs>
  }

  export type $QuoteAcceptanceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteAcceptanceItem"
    objects: {
      acceptance: Prisma.$QuoteAcceptancePayload<ExtArgs>
      quoteItem: Prisma.$QuoteItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quoteAcceptanceId: number
      quoteItemId: number
      acceptedPrice: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["quoteAcceptanceItem"]>
    composites: {}
  }

  type QuoteAcceptanceItemGetPayload<S extends boolean | null | undefined | QuoteAcceptanceItemDefaultArgs> = $Result.GetResult<Prisma.$QuoteAcceptanceItemPayload, S>

  type QuoteAcceptanceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteAcceptanceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteAcceptanceItemCountAggregateInputType | true
    }

  export interface QuoteAcceptanceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteAcceptanceItem'], meta: { name: 'QuoteAcceptanceItem' } }
    /**
     * Find zero or one QuoteAcceptanceItem that matches the filter.
     * @param {QuoteAcceptanceItemFindUniqueArgs} args - Arguments to find a QuoteAcceptanceItem
     * @example
     * // Get one QuoteAcceptanceItem
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteAcceptanceItemFindUniqueArgs>(args: SelectSubset<T, QuoteAcceptanceItemFindUniqueArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteAcceptanceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteAcceptanceItemFindUniqueOrThrowArgs} args - Arguments to find a QuoteAcceptanceItem
     * @example
     * // Get one QuoteAcceptanceItem
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteAcceptanceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteAcceptanceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteAcceptanceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemFindFirstArgs} args - Arguments to find a QuoteAcceptanceItem
     * @example
     * // Get one QuoteAcceptanceItem
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteAcceptanceItemFindFirstArgs>(args?: SelectSubset<T, QuoteAcceptanceItemFindFirstArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteAcceptanceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemFindFirstOrThrowArgs} args - Arguments to find a QuoteAcceptanceItem
     * @example
     * // Get one QuoteAcceptanceItem
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteAcceptanceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteAcceptanceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteAcceptanceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteAcceptanceItems
     * const quoteAcceptanceItems = await prisma.quoteAcceptanceItem.findMany()
     * 
     * // Get first 10 QuoteAcceptanceItems
     * const quoteAcceptanceItems = await prisma.quoteAcceptanceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteAcceptanceItemWithIdOnly = await prisma.quoteAcceptanceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteAcceptanceItemFindManyArgs>(args?: SelectSubset<T, QuoteAcceptanceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteAcceptanceItem.
     * @param {QuoteAcceptanceItemCreateArgs} args - Arguments to create a QuoteAcceptanceItem.
     * @example
     * // Create one QuoteAcceptanceItem
     * const QuoteAcceptanceItem = await prisma.quoteAcceptanceItem.create({
     *   data: {
     *     // ... data to create a QuoteAcceptanceItem
     *   }
     * })
     * 
     */
    create<T extends QuoteAcceptanceItemCreateArgs>(args: SelectSubset<T, QuoteAcceptanceItemCreateArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteAcceptanceItems.
     * @param {QuoteAcceptanceItemCreateManyArgs} args - Arguments to create many QuoteAcceptanceItems.
     * @example
     * // Create many QuoteAcceptanceItems
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteAcceptanceItemCreateManyArgs>(args?: SelectSubset<T, QuoteAcceptanceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuoteAcceptanceItem.
     * @param {QuoteAcceptanceItemDeleteArgs} args - Arguments to delete one QuoteAcceptanceItem.
     * @example
     * // Delete one QuoteAcceptanceItem
     * const QuoteAcceptanceItem = await prisma.quoteAcceptanceItem.delete({
     *   where: {
     *     // ... filter to delete one QuoteAcceptanceItem
     *   }
     * })
     * 
     */
    delete<T extends QuoteAcceptanceItemDeleteArgs>(args: SelectSubset<T, QuoteAcceptanceItemDeleteArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteAcceptanceItem.
     * @param {QuoteAcceptanceItemUpdateArgs} args - Arguments to update one QuoteAcceptanceItem.
     * @example
     * // Update one QuoteAcceptanceItem
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteAcceptanceItemUpdateArgs>(args: SelectSubset<T, QuoteAcceptanceItemUpdateArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteAcceptanceItems.
     * @param {QuoteAcceptanceItemDeleteManyArgs} args - Arguments to filter QuoteAcceptanceItems to delete.
     * @example
     * // Delete a few QuoteAcceptanceItems
     * const { count } = await prisma.quoteAcceptanceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteAcceptanceItemDeleteManyArgs>(args?: SelectSubset<T, QuoteAcceptanceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteAcceptanceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteAcceptanceItems
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteAcceptanceItemUpdateManyArgs>(args: SelectSubset<T, QuoteAcceptanceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuoteAcceptanceItem.
     * @param {QuoteAcceptanceItemUpsertArgs} args - Arguments to update or create a QuoteAcceptanceItem.
     * @example
     * // Update or create a QuoteAcceptanceItem
     * const quoteAcceptanceItem = await prisma.quoteAcceptanceItem.upsert({
     *   create: {
     *     // ... data to create a QuoteAcceptanceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteAcceptanceItem we want to update
     *   }
     * })
     */
    upsert<T extends QuoteAcceptanceItemUpsertArgs>(args: SelectSubset<T, QuoteAcceptanceItemUpsertArgs<ExtArgs>>): Prisma__QuoteAcceptanceItemClient<$Result.GetResult<Prisma.$QuoteAcceptanceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteAcceptanceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemCountArgs} args - Arguments to filter QuoteAcceptanceItems to count.
     * @example
     * // Count the number of QuoteAcceptanceItems
     * const count = await prisma.quoteAcceptanceItem.count({
     *   where: {
     *     // ... the filter for the QuoteAcceptanceItems we want to count
     *   }
     * })
    **/
    count<T extends QuoteAcceptanceItemCountArgs>(
      args?: Subset<T, QuoteAcceptanceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteAcceptanceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteAcceptanceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteAcceptanceItemAggregateArgs>(args: Subset<T, QuoteAcceptanceItemAggregateArgs>): Prisma.PrismaPromise<GetQuoteAcceptanceItemAggregateType<T>>

    /**
     * Group by QuoteAcceptanceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAcceptanceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteAcceptanceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteAcceptanceItemGroupByArgs['orderBy'] }
        : { orderBy?: QuoteAcceptanceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteAcceptanceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteAcceptanceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteAcceptanceItem model
   */
  readonly fields: QuoteAcceptanceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteAcceptanceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteAcceptanceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    acceptance<T extends QuoteAcceptanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteAcceptanceDefaultArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quoteItem<T extends QuoteItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteItemDefaultArgs<ExtArgs>>): Prisma__QuoteItemClient<$Result.GetResult<Prisma.$QuoteItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteAcceptanceItem model
   */
  interface QuoteAcceptanceItemFieldRefs {
    readonly id: FieldRef<"QuoteAcceptanceItem", 'Int'>
    readonly quoteAcceptanceId: FieldRef<"QuoteAcceptanceItem", 'Int'>
    readonly quoteItemId: FieldRef<"QuoteAcceptanceItem", 'Int'>
    readonly acceptedPrice: FieldRef<"QuoteAcceptanceItem", 'Decimal'>
    readonly createdAt: FieldRef<"QuoteAcceptanceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteAcceptanceItem findUnique
   */
  export type QuoteAcceptanceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptanceItem to fetch.
     */
    where: QuoteAcceptanceItemWhereUniqueInput
  }

  /**
   * QuoteAcceptanceItem findUniqueOrThrow
   */
  export type QuoteAcceptanceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptanceItem to fetch.
     */
    where: QuoteAcceptanceItemWhereUniqueInput
  }

  /**
   * QuoteAcceptanceItem findFirst
   */
  export type QuoteAcceptanceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptanceItem to fetch.
     */
    where?: QuoteAcceptanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptanceItems to fetch.
     */
    orderBy?: QuoteAcceptanceItemOrderByWithRelationInput | QuoteAcceptanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteAcceptanceItems.
     */
    cursor?: QuoteAcceptanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptanceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteAcceptanceItems.
     */
    distinct?: QuoteAcceptanceItemScalarFieldEnum | QuoteAcceptanceItemScalarFieldEnum[]
  }

  /**
   * QuoteAcceptanceItem findFirstOrThrow
   */
  export type QuoteAcceptanceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptanceItem to fetch.
     */
    where?: QuoteAcceptanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptanceItems to fetch.
     */
    orderBy?: QuoteAcceptanceItemOrderByWithRelationInput | QuoteAcceptanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteAcceptanceItems.
     */
    cursor?: QuoteAcceptanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptanceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteAcceptanceItems.
     */
    distinct?: QuoteAcceptanceItemScalarFieldEnum | QuoteAcceptanceItemScalarFieldEnum[]
  }

  /**
   * QuoteAcceptanceItem findMany
   */
  export type QuoteAcceptanceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * Filter, which QuoteAcceptanceItems to fetch.
     */
    where?: QuoteAcceptanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteAcceptanceItems to fetch.
     */
    orderBy?: QuoteAcceptanceItemOrderByWithRelationInput | QuoteAcceptanceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteAcceptanceItems.
     */
    cursor?: QuoteAcceptanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteAcceptanceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteAcceptanceItems.
     */
    skip?: number
    distinct?: QuoteAcceptanceItemScalarFieldEnum | QuoteAcceptanceItemScalarFieldEnum[]
  }

  /**
   * QuoteAcceptanceItem create
   */
  export type QuoteAcceptanceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteAcceptanceItem.
     */
    data: XOR<QuoteAcceptanceItemCreateInput, QuoteAcceptanceItemUncheckedCreateInput>
  }

  /**
   * QuoteAcceptanceItem createMany
   */
  export type QuoteAcceptanceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteAcceptanceItems.
     */
    data: QuoteAcceptanceItemCreateManyInput | QuoteAcceptanceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteAcceptanceItem update
   */
  export type QuoteAcceptanceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteAcceptanceItem.
     */
    data: XOR<QuoteAcceptanceItemUpdateInput, QuoteAcceptanceItemUncheckedUpdateInput>
    /**
     * Choose, which QuoteAcceptanceItem to update.
     */
    where: QuoteAcceptanceItemWhereUniqueInput
  }

  /**
   * QuoteAcceptanceItem updateMany
   */
  export type QuoteAcceptanceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteAcceptanceItems.
     */
    data: XOR<QuoteAcceptanceItemUpdateManyMutationInput, QuoteAcceptanceItemUncheckedUpdateManyInput>
    /**
     * Filter which QuoteAcceptanceItems to update
     */
    where?: QuoteAcceptanceItemWhereInput
    /**
     * Limit how many QuoteAcceptanceItems to update.
     */
    limit?: number
  }

  /**
   * QuoteAcceptanceItem upsert
   */
  export type QuoteAcceptanceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteAcceptanceItem to update in case it exists.
     */
    where: QuoteAcceptanceItemWhereUniqueInput
    /**
     * In case the QuoteAcceptanceItem found by the `where` argument doesn't exist, create a new QuoteAcceptanceItem with this data.
     */
    create: XOR<QuoteAcceptanceItemCreateInput, QuoteAcceptanceItemUncheckedCreateInput>
    /**
     * In case the QuoteAcceptanceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteAcceptanceItemUpdateInput, QuoteAcceptanceItemUncheckedUpdateInput>
  }

  /**
   * QuoteAcceptanceItem delete
   */
  export type QuoteAcceptanceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
    /**
     * Filter which QuoteAcceptanceItem to delete.
     */
    where: QuoteAcceptanceItemWhereUniqueInput
  }

  /**
   * QuoteAcceptanceItem deleteMany
   */
  export type QuoteAcceptanceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteAcceptanceItems to delete
     */
    where?: QuoteAcceptanceItemWhereInput
    /**
     * Limit how many QuoteAcceptanceItems to delete.
     */
    limit?: number
  }

  /**
   * QuoteAcceptanceItem without action
   */
  export type QuoteAcceptanceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptanceItem
     */
    select?: QuoteAcceptanceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptanceItem
     */
    omit?: QuoteAcceptanceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceItemInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    pendingAmount: Decimal | null
    paidPercentage: Decimal | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    pendingAmount: Decimal | null
    paidPercentage: Decimal | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectNumber: string | null
    title: string | null
    description: string | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    pendingAmount: Decimal | null
    paidPercentage: Decimal | null
    isFullyPaid: boolean | null
    status: $Enums.ProjectStatus | null
    startedAt: Date | null
    finishedAt: Date | null
    canceledAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectNumber: string | null
    title: string | null
    description: string | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    pendingAmount: Decimal | null
    paidPercentage: Decimal | null
    isFullyPaid: boolean | null
    status: $Enums.ProjectStatus | null
    startedAt: Date | null
    finishedAt: Date | null
    canceledAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: number
    title: number
    description: number
    totalAmount: number
    paidAmount: number
    pendingAmount: number
    paidPercentage: number
    isFullyPaid: number
    status: number
    startedAt: number
    finishedAt: number
    canceledAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    totalAmount?: true
    paidAmount?: true
    pendingAmount?: true
    paidPercentage?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    totalAmount?: true
    paidAmount?: true
    pendingAmount?: true
    paidPercentage?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectNumber?: true
    title?: true
    description?: true
    totalAmount?: true
    paidAmount?: true
    pendingAmount?: true
    paidPercentage?: true
    isFullyPaid?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    canceledAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectNumber?: true
    title?: true
    description?: true
    totalAmount?: true
    paidAmount?: true
    pendingAmount?: true
    paidPercentage?: true
    isFullyPaid?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    canceledAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectNumber?: true
    title?: true
    description?: true
    totalAmount?: true
    paidAmount?: true
    pendingAmount?: true
    paidPercentage?: true
    isFullyPaid?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    canceledAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description: string | null
    totalAmount: Decimal
    paidAmount: Decimal
    pendingAmount: Decimal
    paidPercentage: Decimal
    isFullyPaid: boolean
    status: $Enums.ProjectStatus
    startedAt: Date | null
    finishedAt: Date | null
    canceledAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    quoteId?: boolean
    quoteAcceptanceId?: boolean
    projectNumber?: boolean
    title?: boolean
    description?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    pendingAmount?: boolean
    paidPercentage?: boolean
    isFullyPaid?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    canceledAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
    acceptance?: boolean | QuoteAcceptanceDefaultArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    payments?: boolean | Project$paymentsArgs<ExtArgs>
    documents?: boolean | Project$documentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    clientId?: boolean
    quoteId?: boolean
    quoteAcceptanceId?: boolean
    projectNumber?: boolean
    title?: boolean
    description?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    pendingAmount?: boolean
    paidPercentage?: boolean
    isFullyPaid?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    canceledAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "quoteId" | "quoteAcceptanceId" | "projectNumber" | "title" | "description" | "totalAmount" | "paidAmount" | "pendingAmount" | "paidPercentage" | "isFullyPaid" | "status" | "startedAt" | "finishedAt" | "canceledAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
    acceptance?: boolean | QuoteAcceptanceDefaultArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    payments?: boolean | Project$paymentsArgs<ExtArgs>
    documents?: boolean | Project$documentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      quote: Prisma.$QuotePayload<ExtArgs>
      acceptance: Prisma.$QuoteAcceptancePayload<ExtArgs>
      items: Prisma.$ProjectItemPayload<ExtArgs>[]
      payments: Prisma.$ProjectPaymentPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      quoteId: number
      quoteAcceptanceId: number
      projectNumber: string
      title: string
      description: string | null
      totalAmount: Prisma.Decimal
      paidAmount: Prisma.Decimal
      pendingAmount: Prisma.Decimal
      paidPercentage: Prisma.Decimal
      isFullyPaid: boolean
      status: $Enums.ProjectStatus
      startedAt: Date | null
      finishedAt: Date | null
      canceledAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quote<T extends QuoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteDefaultArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acceptance<T extends QuoteAcceptanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteAcceptanceDefaultArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Project$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Project$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Project$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Project$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly clientId: FieldRef<"Project", 'Int'>
    readonly quoteId: FieldRef<"Project", 'Int'>
    readonly quoteAcceptanceId: FieldRef<"Project", 'Int'>
    readonly projectNumber: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly totalAmount: FieldRef<"Project", 'Decimal'>
    readonly paidAmount: FieldRef<"Project", 'Decimal'>
    readonly pendingAmount: FieldRef<"Project", 'Decimal'>
    readonly paidPercentage: FieldRef<"Project", 'Decimal'>
    readonly isFullyPaid: FieldRef<"Project", 'Boolean'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly startedAt: FieldRef<"Project", 'DateTime'>
    readonly finishedAt: FieldRef<"Project", 'DateTime'>
    readonly canceledAt: FieldRef<"Project", 'DateTime'>
    readonly notes: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.items
   */
  export type Project$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    where?: ProjectItemWhereInput
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    cursor?: ProjectItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * Project.payments
   */
  export type Project$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    where?: ProjectPaymentWhereInput
    orderBy?: ProjectPaymentOrderByWithRelationInput | ProjectPaymentOrderByWithRelationInput[]
    cursor?: ProjectPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPaymentScalarFieldEnum | ProjectPaymentScalarFieldEnum[]
  }

  /**
   * Project.documents
   */
  export type Project$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectItem
   */

  export type AggregateProjectItem = {
    _count: ProjectItemCountAggregateOutputType | null
    _avg: ProjectItemAvgAggregateOutputType | null
    _sum: ProjectItemSumAggregateOutputType | null
    _min: ProjectItemMinAggregateOutputType | null
    _max: ProjectItemMaxAggregateOutputType | null
  }

  export type ProjectItemAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    quoteItemId: number | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type ProjectItemSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    quoteItemId: number | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type ProjectItemMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    quoteItemId: number | null
    title: string | null
    description: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
    status: $Enums.ProjectItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectItemMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    quoteItemId: number | null
    title: string | null
    description: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
    status: $Enums.ProjectItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectItemCountAggregateOutputType = {
    id: number
    projectId: number
    quoteItemId: number
    title: number
    description: number
    quantity: number
    unitPrice: number
    subtotal: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectItemAvgAggregateInputType = {
    id?: true
    projectId?: true
    quoteItemId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type ProjectItemSumAggregateInputType = {
    id?: true
    projectId?: true
    quoteItemId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type ProjectItemMinAggregateInputType = {
    id?: true
    projectId?: true
    quoteItemId?: true
    title?: true
    description?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectItemMaxAggregateInputType = {
    id?: true
    projectId?: true
    quoteItemId?: true
    title?: true
    description?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectItemCountAggregateInputType = {
    id?: true
    projectId?: true
    quoteItemId?: true
    title?: true
    description?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectItem to aggregate.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectItems
    **/
    _count?: true | ProjectItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectItemMaxAggregateInputType
  }

  export type GetProjectItemAggregateType<T extends ProjectItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectItem[P]>
      : GetScalarType<T[P], AggregateProjectItem[P]>
  }




  export type ProjectItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectItemWhereInput
    orderBy?: ProjectItemOrderByWithAggregationInput | ProjectItemOrderByWithAggregationInput[]
    by: ProjectItemScalarFieldEnum[] | ProjectItemScalarFieldEnum
    having?: ProjectItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectItemCountAggregateInputType | true
    _avg?: ProjectItemAvgAggregateInputType
    _sum?: ProjectItemSumAggregateInputType
    _min?: ProjectItemMinAggregateInputType
    _max?: ProjectItemMaxAggregateInputType
  }

  export type ProjectItemGroupByOutputType = {
    id: number
    projectId: number
    quoteItemId: number | null
    title: string
    description: string | null
    quantity: Decimal
    unitPrice: Decimal
    subtotal: Decimal
    status: $Enums.ProjectItemStatus
    createdAt: Date
    updatedAt: Date
    _count: ProjectItemCountAggregateOutputType | null
    _avg: ProjectItemAvgAggregateOutputType | null
    _sum: ProjectItemSumAggregateOutputType | null
    _min: ProjectItemMinAggregateOutputType | null
    _max: ProjectItemMaxAggregateOutputType | null
  }

  type GetProjectItemGroupByPayload<T extends ProjectItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectItemGroupByOutputType[P]>
        }
      >
    >


  export type ProjectItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quoteItemId?: boolean
    title?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectItem"]>



  export type ProjectItemSelectScalar = {
    id?: boolean
    projectId?: boolean
    quoteItemId?: boolean
    title?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "quoteItemId" | "title" | "description" | "quantity" | "unitPrice" | "subtotal" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["projectItem"]>
  export type ProjectItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectItem"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      quoteItemId: number | null
      title: string
      description: string | null
      quantity: Prisma.Decimal
      unitPrice: Prisma.Decimal
      subtotal: Prisma.Decimal
      status: $Enums.ProjectItemStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectItem"]>
    composites: {}
  }

  type ProjectItemGetPayload<S extends boolean | null | undefined | ProjectItemDefaultArgs> = $Result.GetResult<Prisma.$ProjectItemPayload, S>

  type ProjectItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectItemCountAggregateInputType | true
    }

  export interface ProjectItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectItem'], meta: { name: 'ProjectItem' } }
    /**
     * Find zero or one ProjectItem that matches the filter.
     * @param {ProjectItemFindUniqueArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectItemFindUniqueArgs>(args: SelectSubset<T, ProjectItemFindUniqueArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectItemFindUniqueOrThrowArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemFindFirstArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectItemFindFirstArgs>(args?: SelectSubset<T, ProjectItemFindFirstArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemFindFirstOrThrowArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectItems
     * const projectItems = await prisma.projectItem.findMany()
     * 
     * // Get first 10 ProjectItems
     * const projectItems = await prisma.projectItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectItemWithIdOnly = await prisma.projectItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectItemFindManyArgs>(args?: SelectSubset<T, ProjectItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectItem.
     * @param {ProjectItemCreateArgs} args - Arguments to create a ProjectItem.
     * @example
     * // Create one ProjectItem
     * const ProjectItem = await prisma.projectItem.create({
     *   data: {
     *     // ... data to create a ProjectItem
     *   }
     * })
     * 
     */
    create<T extends ProjectItemCreateArgs>(args: SelectSubset<T, ProjectItemCreateArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectItems.
     * @param {ProjectItemCreateManyArgs} args - Arguments to create many ProjectItems.
     * @example
     * // Create many ProjectItems
     * const projectItem = await prisma.projectItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectItemCreateManyArgs>(args?: SelectSubset<T, ProjectItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectItem.
     * @param {ProjectItemDeleteArgs} args - Arguments to delete one ProjectItem.
     * @example
     * // Delete one ProjectItem
     * const ProjectItem = await prisma.projectItem.delete({
     *   where: {
     *     // ... filter to delete one ProjectItem
     *   }
     * })
     * 
     */
    delete<T extends ProjectItemDeleteArgs>(args: SelectSubset<T, ProjectItemDeleteArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectItem.
     * @param {ProjectItemUpdateArgs} args - Arguments to update one ProjectItem.
     * @example
     * // Update one ProjectItem
     * const projectItem = await prisma.projectItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectItemUpdateArgs>(args: SelectSubset<T, ProjectItemUpdateArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectItems.
     * @param {ProjectItemDeleteManyArgs} args - Arguments to filter ProjectItems to delete.
     * @example
     * // Delete a few ProjectItems
     * const { count } = await prisma.projectItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectItemDeleteManyArgs>(args?: SelectSubset<T, ProjectItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectItems
     * const projectItem = await prisma.projectItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectItemUpdateManyArgs>(args: SelectSubset<T, ProjectItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectItem.
     * @param {ProjectItemUpsertArgs} args - Arguments to update or create a ProjectItem.
     * @example
     * // Update or create a ProjectItem
     * const projectItem = await prisma.projectItem.upsert({
     *   create: {
     *     // ... data to create a ProjectItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectItem we want to update
     *   }
     * })
     */
    upsert<T extends ProjectItemUpsertArgs>(args: SelectSubset<T, ProjectItemUpsertArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemCountArgs} args - Arguments to filter ProjectItems to count.
     * @example
     * // Count the number of ProjectItems
     * const count = await prisma.projectItem.count({
     *   where: {
     *     // ... the filter for the ProjectItems we want to count
     *   }
     * })
    **/
    count<T extends ProjectItemCountArgs>(
      args?: Subset<T, ProjectItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectItemAggregateArgs>(args: Subset<T, ProjectItemAggregateArgs>): Prisma.PrismaPromise<GetProjectItemAggregateType<T>>

    /**
     * Group by ProjectItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectItemGroupByArgs['orderBy'] }
        : { orderBy?: ProjectItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectItem model
   */
  readonly fields: ProjectItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectItem model
   */
  interface ProjectItemFieldRefs {
    readonly id: FieldRef<"ProjectItem", 'Int'>
    readonly projectId: FieldRef<"ProjectItem", 'Int'>
    readonly quoteItemId: FieldRef<"ProjectItem", 'Int'>
    readonly title: FieldRef<"ProjectItem", 'String'>
    readonly description: FieldRef<"ProjectItem", 'String'>
    readonly quantity: FieldRef<"ProjectItem", 'Decimal'>
    readonly unitPrice: FieldRef<"ProjectItem", 'Decimal'>
    readonly subtotal: FieldRef<"ProjectItem", 'Decimal'>
    readonly status: FieldRef<"ProjectItem", 'ProjectItemStatus'>
    readonly createdAt: FieldRef<"ProjectItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectItem findUnique
   */
  export type ProjectItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem findUniqueOrThrow
   */
  export type ProjectItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem findFirst
   */
  export type ProjectItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectItems.
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectItems.
     */
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * ProjectItem findFirstOrThrow
   */
  export type ProjectItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectItems.
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectItems.
     */
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * ProjectItem findMany
   */
  export type ProjectItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItems to fetch.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectItems.
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * ProjectItem create
   */
  export type ProjectItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectItem.
     */
    data: XOR<ProjectItemCreateInput, ProjectItemUncheckedCreateInput>
  }

  /**
   * ProjectItem createMany
   */
  export type ProjectItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectItems.
     */
    data: ProjectItemCreateManyInput | ProjectItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectItem update
   */
  export type ProjectItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectItem.
     */
    data: XOR<ProjectItemUpdateInput, ProjectItemUncheckedUpdateInput>
    /**
     * Choose, which ProjectItem to update.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem updateMany
   */
  export type ProjectItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectItems.
     */
    data: XOR<ProjectItemUpdateManyMutationInput, ProjectItemUncheckedUpdateManyInput>
    /**
     * Filter which ProjectItems to update
     */
    where?: ProjectItemWhereInput
    /**
     * Limit how many ProjectItems to update.
     */
    limit?: number
  }

  /**
   * ProjectItem upsert
   */
  export type ProjectItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectItem to update in case it exists.
     */
    where: ProjectItemWhereUniqueInput
    /**
     * In case the ProjectItem found by the `where` argument doesn't exist, create a new ProjectItem with this data.
     */
    create: XOR<ProjectItemCreateInput, ProjectItemUncheckedCreateInput>
    /**
     * In case the ProjectItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectItemUpdateInput, ProjectItemUncheckedUpdateInput>
  }

  /**
   * ProjectItem delete
   */
  export type ProjectItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter which ProjectItem to delete.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem deleteMany
   */
  export type ProjectItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectItems to delete
     */
    where?: ProjectItemWhereInput
    /**
     * Limit how many ProjectItems to delete.
     */
    limit?: number
  }

  /**
   * ProjectItem without action
   */
  export type ProjectItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPayment
   */

  export type AggregateProjectPayment = {
    _count: ProjectPaymentCountAggregateOutputType | null
    _avg: ProjectPaymentAvgAggregateOutputType | null
    _sum: ProjectPaymentSumAggregateOutputType | null
    _min: ProjectPaymentMinAggregateOutputType | null
    _max: ProjectPaymentMaxAggregateOutputType | null
  }

  export type ProjectPaymentAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    registeredByUserId: number | null
    amount: Decimal | null
    percentageEquivalent: Decimal | null
  }

  export type ProjectPaymentSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    registeredByUserId: number | null
    amount: Decimal | null
    percentageEquivalent: Decimal | null
  }

  export type ProjectPaymentMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    registeredByUserId: number | null
    paymentDate: Date | null
    amount: Decimal | null
    percentageEquivalent: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    reference: string | null
    notes: string | null
    receiptFilePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPaymentMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    registeredByUserId: number | null
    paymentDate: Date | null
    amount: Decimal | null
    percentageEquivalent: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    reference: string | null
    notes: string | null
    receiptFilePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectPaymentCountAggregateOutputType = {
    id: number
    projectId: number
    registeredByUserId: number
    paymentDate: number
    amount: number
    percentageEquivalent: number
    paymentMethod: number
    reference: number
    notes: number
    receiptFilePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectPaymentAvgAggregateInputType = {
    id?: true
    projectId?: true
    registeredByUserId?: true
    amount?: true
    percentageEquivalent?: true
  }

  export type ProjectPaymentSumAggregateInputType = {
    id?: true
    projectId?: true
    registeredByUserId?: true
    amount?: true
    percentageEquivalent?: true
  }

  export type ProjectPaymentMinAggregateInputType = {
    id?: true
    projectId?: true
    registeredByUserId?: true
    paymentDate?: true
    amount?: true
    percentageEquivalent?: true
    paymentMethod?: true
    reference?: true
    notes?: true
    receiptFilePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPaymentMaxAggregateInputType = {
    id?: true
    projectId?: true
    registeredByUserId?: true
    paymentDate?: true
    amount?: true
    percentageEquivalent?: true
    paymentMethod?: true
    reference?: true
    notes?: true
    receiptFilePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectPaymentCountAggregateInputType = {
    id?: true
    projectId?: true
    registeredByUserId?: true
    paymentDate?: true
    amount?: true
    percentageEquivalent?: true
    paymentMethod?: true
    reference?: true
    notes?: true
    receiptFilePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPayment to aggregate.
     */
    where?: ProjectPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPayments to fetch.
     */
    orderBy?: ProjectPaymentOrderByWithRelationInput | ProjectPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPayments
    **/
    _count?: true | ProjectPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPaymentMaxAggregateInputType
  }

  export type GetProjectPaymentAggregateType<T extends ProjectPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPayment[P]>
      : GetScalarType<T[P], AggregateProjectPayment[P]>
  }




  export type ProjectPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPaymentWhereInput
    orderBy?: ProjectPaymentOrderByWithAggregationInput | ProjectPaymentOrderByWithAggregationInput[]
    by: ProjectPaymentScalarFieldEnum[] | ProjectPaymentScalarFieldEnum
    having?: ProjectPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPaymentCountAggregateInputType | true
    _avg?: ProjectPaymentAvgAggregateInputType
    _sum?: ProjectPaymentSumAggregateInputType
    _min?: ProjectPaymentMinAggregateInputType
    _max?: ProjectPaymentMaxAggregateInputType
  }

  export type ProjectPaymentGroupByOutputType = {
    id: number
    projectId: number
    registeredByUserId: number
    paymentDate: Date
    amount: Decimal
    percentageEquivalent: Decimal
    paymentMethod: $Enums.PaymentMethod
    reference: string | null
    notes: string | null
    receiptFilePath: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectPaymentCountAggregateOutputType | null
    _avg: ProjectPaymentAvgAggregateOutputType | null
    _sum: ProjectPaymentSumAggregateOutputType | null
    _min: ProjectPaymentMinAggregateOutputType | null
    _max: ProjectPaymentMaxAggregateOutputType | null
  }

  type GetProjectPaymentGroupByPayload<T extends ProjectPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPaymentGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    registeredByUserId?: boolean
    paymentDate?: boolean
    amount?: boolean
    percentageEquivalent?: boolean
    paymentMethod?: boolean
    reference?: boolean
    notes?: boolean
    receiptFilePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    registeredBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPayment"]>



  export type ProjectPaymentSelectScalar = {
    id?: boolean
    projectId?: boolean
    registeredByUserId?: boolean
    paymentDate?: boolean
    amount?: boolean
    percentageEquivalent?: boolean
    paymentMethod?: boolean
    reference?: boolean
    notes?: boolean
    receiptFilePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "registeredByUserId" | "paymentDate" | "amount" | "percentageEquivalent" | "paymentMethod" | "reference" | "notes" | "receiptFilePath" | "createdAt" | "updatedAt", ExtArgs["result"]["projectPayment"]>
  export type ProjectPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    registeredBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPayment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      registeredBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      registeredByUserId: number
      paymentDate: Date
      amount: Prisma.Decimal
      percentageEquivalent: Prisma.Decimal
      paymentMethod: $Enums.PaymentMethod
      reference: string | null
      notes: string | null
      receiptFilePath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectPayment"]>
    composites: {}
  }

  type ProjectPaymentGetPayload<S extends boolean | null | undefined | ProjectPaymentDefaultArgs> = $Result.GetResult<Prisma.$ProjectPaymentPayload, S>

  type ProjectPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectPaymentCountAggregateInputType | true
    }

  export interface ProjectPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPayment'], meta: { name: 'ProjectPayment' } }
    /**
     * Find zero or one ProjectPayment that matches the filter.
     * @param {ProjectPaymentFindUniqueArgs} args - Arguments to find a ProjectPayment
     * @example
     * // Get one ProjectPayment
     * const projectPayment = await prisma.projectPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPaymentFindUniqueArgs>(args: SelectSubset<T, ProjectPaymentFindUniqueArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectPaymentFindUniqueOrThrowArgs} args - Arguments to find a ProjectPayment
     * @example
     * // Get one ProjectPayment
     * const projectPayment = await prisma.projectPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentFindFirstArgs} args - Arguments to find a ProjectPayment
     * @example
     * // Get one ProjectPayment
     * const projectPayment = await prisma.projectPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPaymentFindFirstArgs>(args?: SelectSubset<T, ProjectPaymentFindFirstArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentFindFirstOrThrowArgs} args - Arguments to find a ProjectPayment
     * @example
     * // Get one ProjectPayment
     * const projectPayment = await prisma.projectPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPayments
     * const projectPayments = await prisma.projectPayment.findMany()
     * 
     * // Get first 10 ProjectPayments
     * const projectPayments = await prisma.projectPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPaymentWithIdOnly = await prisma.projectPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPaymentFindManyArgs>(args?: SelectSubset<T, ProjectPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectPayment.
     * @param {ProjectPaymentCreateArgs} args - Arguments to create a ProjectPayment.
     * @example
     * // Create one ProjectPayment
     * const ProjectPayment = await prisma.projectPayment.create({
     *   data: {
     *     // ... data to create a ProjectPayment
     *   }
     * })
     * 
     */
    create<T extends ProjectPaymentCreateArgs>(args: SelectSubset<T, ProjectPaymentCreateArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectPayments.
     * @param {ProjectPaymentCreateManyArgs} args - Arguments to create many ProjectPayments.
     * @example
     * // Create many ProjectPayments
     * const projectPayment = await prisma.projectPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPaymentCreateManyArgs>(args?: SelectSubset<T, ProjectPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectPayment.
     * @param {ProjectPaymentDeleteArgs} args - Arguments to delete one ProjectPayment.
     * @example
     * // Delete one ProjectPayment
     * const ProjectPayment = await prisma.projectPayment.delete({
     *   where: {
     *     // ... filter to delete one ProjectPayment
     *   }
     * })
     * 
     */
    delete<T extends ProjectPaymentDeleteArgs>(args: SelectSubset<T, ProjectPaymentDeleteArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectPayment.
     * @param {ProjectPaymentUpdateArgs} args - Arguments to update one ProjectPayment.
     * @example
     * // Update one ProjectPayment
     * const projectPayment = await prisma.projectPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPaymentUpdateArgs>(args: SelectSubset<T, ProjectPaymentUpdateArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectPayments.
     * @param {ProjectPaymentDeleteManyArgs} args - Arguments to filter ProjectPayments to delete.
     * @example
     * // Delete a few ProjectPayments
     * const { count } = await prisma.projectPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPaymentDeleteManyArgs>(args?: SelectSubset<T, ProjectPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPayments
     * const projectPayment = await prisma.projectPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPaymentUpdateManyArgs>(args: SelectSubset<T, ProjectPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectPayment.
     * @param {ProjectPaymentUpsertArgs} args - Arguments to update or create a ProjectPayment.
     * @example
     * // Update or create a ProjectPayment
     * const projectPayment = await prisma.projectPayment.upsert({
     *   create: {
     *     // ... data to create a ProjectPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPayment we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPaymentUpsertArgs>(args: SelectSubset<T, ProjectPaymentUpsertArgs<ExtArgs>>): Prisma__ProjectPaymentClient<$Result.GetResult<Prisma.$ProjectPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentCountArgs} args - Arguments to filter ProjectPayments to count.
     * @example
     * // Count the number of ProjectPayments
     * const count = await prisma.projectPayment.count({
     *   where: {
     *     // ... the filter for the ProjectPayments we want to count
     *   }
     * })
    **/
    count<T extends ProjectPaymentCountArgs>(
      args?: Subset<T, ProjectPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectPaymentAggregateArgs>(args: Subset<T, ProjectPaymentAggregateArgs>): Prisma.PrismaPromise<GetProjectPaymentAggregateType<T>>

    /**
     * Group by ProjectPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPaymentGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPayment model
   */
  readonly fields: ProjectPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registeredBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectPayment model
   */
  interface ProjectPaymentFieldRefs {
    readonly id: FieldRef<"ProjectPayment", 'Int'>
    readonly projectId: FieldRef<"ProjectPayment", 'Int'>
    readonly registeredByUserId: FieldRef<"ProjectPayment", 'Int'>
    readonly paymentDate: FieldRef<"ProjectPayment", 'DateTime'>
    readonly amount: FieldRef<"ProjectPayment", 'Decimal'>
    readonly percentageEquivalent: FieldRef<"ProjectPayment", 'Decimal'>
    readonly paymentMethod: FieldRef<"ProjectPayment", 'PaymentMethod'>
    readonly reference: FieldRef<"ProjectPayment", 'String'>
    readonly notes: FieldRef<"ProjectPayment", 'String'>
    readonly receiptFilePath: FieldRef<"ProjectPayment", 'String'>
    readonly createdAt: FieldRef<"ProjectPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPayment findUnique
   */
  export type ProjectPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPayment to fetch.
     */
    where: ProjectPaymentWhereUniqueInput
  }

  /**
   * ProjectPayment findUniqueOrThrow
   */
  export type ProjectPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPayment to fetch.
     */
    where: ProjectPaymentWhereUniqueInput
  }

  /**
   * ProjectPayment findFirst
   */
  export type ProjectPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPayment to fetch.
     */
    where?: ProjectPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPayments to fetch.
     */
    orderBy?: ProjectPaymentOrderByWithRelationInput | ProjectPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPayments.
     */
    cursor?: ProjectPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPayments.
     */
    distinct?: ProjectPaymentScalarFieldEnum | ProjectPaymentScalarFieldEnum[]
  }

  /**
   * ProjectPayment findFirstOrThrow
   */
  export type ProjectPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPayment to fetch.
     */
    where?: ProjectPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPayments to fetch.
     */
    orderBy?: ProjectPaymentOrderByWithRelationInput | ProjectPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPayments.
     */
    cursor?: ProjectPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPayments.
     */
    distinct?: ProjectPaymentScalarFieldEnum | ProjectPaymentScalarFieldEnum[]
  }

  /**
   * ProjectPayment findMany
   */
  export type ProjectPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPayments to fetch.
     */
    where?: ProjectPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPayments to fetch.
     */
    orderBy?: ProjectPaymentOrderByWithRelationInput | ProjectPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPayments.
     */
    cursor?: ProjectPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPayments.
     */
    skip?: number
    distinct?: ProjectPaymentScalarFieldEnum | ProjectPaymentScalarFieldEnum[]
  }

  /**
   * ProjectPayment create
   */
  export type ProjectPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPayment.
     */
    data: XOR<ProjectPaymentCreateInput, ProjectPaymentUncheckedCreateInput>
  }

  /**
   * ProjectPayment createMany
   */
  export type ProjectPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPayments.
     */
    data: ProjectPaymentCreateManyInput | ProjectPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectPayment update
   */
  export type ProjectPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPayment.
     */
    data: XOR<ProjectPaymentUpdateInput, ProjectPaymentUncheckedUpdateInput>
    /**
     * Choose, which ProjectPayment to update.
     */
    where: ProjectPaymentWhereUniqueInput
  }

  /**
   * ProjectPayment updateMany
   */
  export type ProjectPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPayments.
     */
    data: XOR<ProjectPaymentUpdateManyMutationInput, ProjectPaymentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPayments to update
     */
    where?: ProjectPaymentWhereInput
    /**
     * Limit how many ProjectPayments to update.
     */
    limit?: number
  }

  /**
   * ProjectPayment upsert
   */
  export type ProjectPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPayment to update in case it exists.
     */
    where: ProjectPaymentWhereUniqueInput
    /**
     * In case the ProjectPayment found by the `where` argument doesn't exist, create a new ProjectPayment with this data.
     */
    create: XOR<ProjectPaymentCreateInput, ProjectPaymentUncheckedCreateInput>
    /**
     * In case the ProjectPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPaymentUpdateInput, ProjectPaymentUncheckedUpdateInput>
  }

  /**
   * ProjectPayment delete
   */
  export type ProjectPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
    /**
     * Filter which ProjectPayment to delete.
     */
    where: ProjectPaymentWhereUniqueInput
  }

  /**
   * ProjectPayment deleteMany
   */
  export type ProjectPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPayments to delete
     */
    where?: ProjectPaymentWhereInput
    /**
     * Limit how many ProjectPayments to delete.
     */
    limit?: number
  }

  /**
   * ProjectPayment without action
   */
  export type ProjectPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPayment
     */
    select?: ProjectPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPayment
     */
    omit?: ProjectPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectId: number | null
    sizeInBytes: number | null
    uploadedByUserId: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectId: number | null
    sizeInBytes: number | null
    uploadedByUserId: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectId: number | null
    documentType: $Enums.DocumentType | null
    fileName: string | null
    invoiceNumber: string | null
    notes: string | null
    filePath: string | null
    mimeType: string | null
    sizeInBytes: number | null
    bucket: string | null
    objectKey: string | null
    uploadedByUserId: number | null
    createdAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectId: number | null
    documentType: $Enums.DocumentType | null
    fileName: string | null
    invoiceNumber: string | null
    notes: string | null
    filePath: string | null
    mimeType: string | null
    sizeInBytes: number | null
    bucket: string | null
    objectKey: string | null
    uploadedByUserId: number | null
    createdAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectId: number
    documentType: number
    fileName: number
    invoiceNumber: number
    notes: number
    filePath: number
    mimeType: number
    sizeInBytes: number
    bucket: number
    objectKey: number
    uploadedByUserId: number
    createdAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectId?: true
    sizeInBytes?: true
    uploadedByUserId?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectId?: true
    sizeInBytes?: true
    uploadedByUserId?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectId?: true
    documentType?: true
    fileName?: true
    invoiceNumber?: true
    notes?: true
    filePath?: true
    mimeType?: true
    sizeInBytes?: true
    bucket?: true
    objectKey?: true
    uploadedByUserId?: true
    createdAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectId?: true
    documentType?: true
    fileName?: true
    invoiceNumber?: true
    notes?: true
    filePath?: true
    mimeType?: true
    sizeInBytes?: true
    bucket?: true
    objectKey?: true
    uploadedByUserId?: true
    createdAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    clientId?: true
    quoteId?: true
    quoteAcceptanceId?: true
    projectId?: true
    documentType?: true
    fileName?: true
    invoiceNumber?: true
    notes?: true
    filePath?: true
    mimeType?: true
    sizeInBytes?: true
    bucket?: true
    objectKey?: true
    uploadedByUserId?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    clientId: number | null
    quoteId: number | null
    quoteAcceptanceId: number | null
    projectId: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber: string | null
    notes: string | null
    filePath: string | null
    mimeType: string | null
    sizeInBytes: number | null
    bucket: string | null
    objectKey: string | null
    uploadedByUserId: number | null
    createdAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    quoteId?: boolean
    quoteAcceptanceId?: boolean
    projectId?: boolean
    documentType?: boolean
    fileName?: boolean
    invoiceNumber?: boolean
    notes?: boolean
    filePath?: boolean
    mimeType?: boolean
    sizeInBytes?: boolean
    bucket?: boolean
    objectKey?: boolean
    uploadedByUserId?: boolean
    createdAt?: boolean
    client?: boolean | Document$clientArgs<ExtArgs>
    quote?: boolean | Document$quoteArgs<ExtArgs>
    acceptance?: boolean | Document$acceptanceArgs<ExtArgs>
    project?: boolean | Document$projectArgs<ExtArgs>
    uploadedBy?: boolean | Document$uploadedByArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    id?: boolean
    clientId?: boolean
    quoteId?: boolean
    quoteAcceptanceId?: boolean
    projectId?: boolean
    documentType?: boolean
    fileName?: boolean
    invoiceNumber?: boolean
    notes?: boolean
    filePath?: boolean
    mimeType?: boolean
    sizeInBytes?: boolean
    bucket?: boolean
    objectKey?: boolean
    uploadedByUserId?: boolean
    createdAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "quoteId" | "quoteAcceptanceId" | "projectId" | "documentType" | "fileName" | "invoiceNumber" | "notes" | "filePath" | "mimeType" | "sizeInBytes" | "bucket" | "objectKey" | "uploadedByUserId" | "createdAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Document$clientArgs<ExtArgs>
    quote?: boolean | Document$quoteArgs<ExtArgs>
    acceptance?: boolean | Document$acceptanceArgs<ExtArgs>
    project?: boolean | Document$projectArgs<ExtArgs>
    uploadedBy?: boolean | Document$uploadedByArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      quote: Prisma.$QuotePayload<ExtArgs> | null
      acceptance: Prisma.$QuoteAcceptancePayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs> | null
      uploadedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number | null
      quoteId: number | null
      quoteAcceptanceId: number | null
      projectId: number | null
      documentType: $Enums.DocumentType
      fileName: string
      invoiceNumber: string | null
      notes: string | null
      filePath: string | null
      mimeType: string | null
      sizeInBytes: number | null
      bucket: string | null
      objectKey: string | null
      uploadedByUserId: number | null
      createdAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Document$clientArgs<ExtArgs> = {}>(args?: Subset<T, Document$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quote<T extends Document$quoteArgs<ExtArgs> = {}>(args?: Subset<T, Document$quoteArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acceptance<T extends Document$acceptanceArgs<ExtArgs> = {}>(args?: Subset<T, Document$acceptanceArgs<ExtArgs>>): Prisma__QuoteAcceptanceClient<$Result.GetResult<Prisma.$QuoteAcceptancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends Document$projectArgs<ExtArgs> = {}>(args?: Subset<T, Document$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends Document$uploadedByArgs<ExtArgs> = {}>(args?: Subset<T, Document$uploadedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly clientId: FieldRef<"Document", 'Int'>
    readonly quoteId: FieldRef<"Document", 'Int'>
    readonly quoteAcceptanceId: FieldRef<"Document", 'Int'>
    readonly projectId: FieldRef<"Document", 'Int'>
    readonly documentType: FieldRef<"Document", 'DocumentType'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly invoiceNumber: FieldRef<"Document", 'String'>
    readonly notes: FieldRef<"Document", 'String'>
    readonly filePath: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly sizeInBytes: FieldRef<"Document", 'Int'>
    readonly bucket: FieldRef<"Document", 'String'>
    readonly objectKey: FieldRef<"Document", 'String'>
    readonly uploadedByUserId: FieldRef<"Document", 'Int'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.client
   */
  export type Document$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Document.quote
   */
  export type Document$quoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
  }

  /**
   * Document.acceptance
   */
  export type Document$acceptanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteAcceptance
     */
    select?: QuoteAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteAcceptance
     */
    omit?: QuoteAcceptanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteAcceptanceInclude<ExtArgs> | null
    where?: QuoteAcceptanceWhereInput
  }

  /**
   * Document.project
   */
  export type Document$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Document.uploadedBy
   */
  export type Document$uploadedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model StatusHistory
   */

  export type AggregateStatusHistory = {
    _count: StatusHistoryCountAggregateOutputType | null
    _avg: StatusHistoryAvgAggregateOutputType | null
    _sum: StatusHistorySumAggregateOutputType | null
    _min: StatusHistoryMinAggregateOutputType | null
    _max: StatusHistoryMaxAggregateOutputType | null
  }

  export type StatusHistoryAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
    changedByUserId: number | null
  }

  export type StatusHistorySumAggregateOutputType = {
    id: number | null
    entityId: number | null
    changedByUserId: number | null
  }

  export type StatusHistoryMinAggregateOutputType = {
    id: number | null
    entityType: $Enums.EntityType | null
    entityId: number | null
    oldStatus: string | null
    newStatus: string | null
    changedByUserId: number | null
    changedAt: Date | null
    notes: string | null
  }

  export type StatusHistoryMaxAggregateOutputType = {
    id: number | null
    entityType: $Enums.EntityType | null
    entityId: number | null
    oldStatus: string | null
    newStatus: string | null
    changedByUserId: number | null
    changedAt: Date | null
    notes: string | null
  }

  export type StatusHistoryCountAggregateOutputType = {
    id: number
    entityType: number
    entityId: number
    oldStatus: number
    newStatus: number
    changedByUserId: number
    changedAt: number
    notes: number
    _all: number
  }


  export type StatusHistoryAvgAggregateInputType = {
    id?: true
    entityId?: true
    changedByUserId?: true
  }

  export type StatusHistorySumAggregateInputType = {
    id?: true
    entityId?: true
    changedByUserId?: true
  }

  export type StatusHistoryMinAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    oldStatus?: true
    newStatus?: true
    changedByUserId?: true
    changedAt?: true
    notes?: true
  }

  export type StatusHistoryMaxAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    oldStatus?: true
    newStatus?: true
    changedByUserId?: true
    changedAt?: true
    notes?: true
  }

  export type StatusHistoryCountAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    oldStatus?: true
    newStatus?: true
    changedByUserId?: true
    changedAt?: true
    notes?: true
    _all?: true
  }

  export type StatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusHistory to aggregate.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusHistories
    **/
    _count?: true | StatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusHistoryMaxAggregateInputType
  }

  export type GetStatusHistoryAggregateType<T extends StatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusHistory[P]>
      : GetScalarType<T[P], AggregateStatusHistory[P]>
  }




  export type StatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusHistoryWhereInput
    orderBy?: StatusHistoryOrderByWithAggregationInput | StatusHistoryOrderByWithAggregationInput[]
    by: StatusHistoryScalarFieldEnum[] | StatusHistoryScalarFieldEnum
    having?: StatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusHistoryCountAggregateInputType | true
    _avg?: StatusHistoryAvgAggregateInputType
    _sum?: StatusHistorySumAggregateInputType
    _min?: StatusHistoryMinAggregateInputType
    _max?: StatusHistoryMaxAggregateInputType
  }

  export type StatusHistoryGroupByOutputType = {
    id: number
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedByUserId: number | null
    changedAt: Date
    notes: string | null
    _count: StatusHistoryCountAggregateOutputType | null
    _avg: StatusHistoryAvgAggregateOutputType | null
    _sum: StatusHistorySumAggregateOutputType | null
    _min: StatusHistoryMinAggregateOutputType | null
    _max: StatusHistoryMaxAggregateOutputType | null
  }

  type GetStatusHistoryGroupByPayload<T extends StatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    changedByUserId?: boolean
    changedAt?: boolean
    notes?: boolean
    changedBy?: boolean | StatusHistory$changedByArgs<ExtArgs>
  }, ExtArgs["result"]["statusHistory"]>



  export type StatusHistorySelectScalar = {
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    changedByUserId?: boolean
    changedAt?: boolean
    notes?: boolean
  }

  export type StatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entityType" | "entityId" | "oldStatus" | "newStatus" | "changedByUserId" | "changedAt" | "notes", ExtArgs["result"]["statusHistory"]>
  export type StatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    changedBy?: boolean | StatusHistory$changedByArgs<ExtArgs>
  }

  export type $StatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusHistory"
    objects: {
      changedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entityType: $Enums.EntityType
      entityId: number
      oldStatus: string
      newStatus: string
      changedByUserId: number | null
      changedAt: Date
      notes: string | null
    }, ExtArgs["result"]["statusHistory"]>
    composites: {}
  }

  type StatusHistoryGetPayload<S extends boolean | null | undefined | StatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$StatusHistoryPayload, S>

  type StatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusHistoryCountAggregateInputType | true
    }

  export interface StatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusHistory'], meta: { name: 'StatusHistory' } }
    /**
     * Find zero or one StatusHistory that matches the filter.
     * @param {StatusHistoryFindUniqueArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusHistoryFindUniqueArgs>(args: SelectSubset<T, StatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryFindFirstArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusHistoryFindFirstArgs>(args?: SelectSubset<T, StatusHistoryFindFirstArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryFindFirstOrThrowArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusHistories
     * const statusHistories = await prisma.statusHistory.findMany()
     * 
     * // Get first 10 StatusHistories
     * const statusHistories = await prisma.statusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusHistoryWithIdOnly = await prisma.statusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusHistoryFindManyArgs>(args?: SelectSubset<T, StatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusHistory.
     * @param {StatusHistoryCreateArgs} args - Arguments to create a StatusHistory.
     * @example
     * // Create one StatusHistory
     * const StatusHistory = await prisma.statusHistory.create({
     *   data: {
     *     // ... data to create a StatusHistory
     *   }
     * })
     * 
     */
    create<T extends StatusHistoryCreateArgs>(args: SelectSubset<T, StatusHistoryCreateArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusHistories.
     * @param {StatusHistoryCreateManyArgs} args - Arguments to create many StatusHistories.
     * @example
     * // Create many StatusHistories
     * const statusHistory = await prisma.statusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusHistoryCreateManyArgs>(args?: SelectSubset<T, StatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusHistory.
     * @param {StatusHistoryDeleteArgs} args - Arguments to delete one StatusHistory.
     * @example
     * // Delete one StatusHistory
     * const StatusHistory = await prisma.statusHistory.delete({
     *   where: {
     *     // ... filter to delete one StatusHistory
     *   }
     * })
     * 
     */
    delete<T extends StatusHistoryDeleteArgs>(args: SelectSubset<T, StatusHistoryDeleteArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusHistory.
     * @param {StatusHistoryUpdateArgs} args - Arguments to update one StatusHistory.
     * @example
     * // Update one StatusHistory
     * const statusHistory = await prisma.statusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusHistoryUpdateArgs>(args: SelectSubset<T, StatusHistoryUpdateArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusHistories.
     * @param {StatusHistoryDeleteManyArgs} args - Arguments to filter StatusHistories to delete.
     * @example
     * // Delete a few StatusHistories
     * const { count } = await prisma.statusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusHistoryDeleteManyArgs>(args?: SelectSubset<T, StatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusHistories
     * const statusHistory = await prisma.statusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusHistoryUpdateManyArgs>(args: SelectSubset<T, StatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusHistory.
     * @param {StatusHistoryUpsertArgs} args - Arguments to update or create a StatusHistory.
     * @example
     * // Update or create a StatusHistory
     * const statusHistory = await prisma.statusHistory.upsert({
     *   create: {
     *     // ... data to create a StatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends StatusHistoryUpsertArgs>(args: SelectSubset<T, StatusHistoryUpsertArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryCountArgs} args - Arguments to filter StatusHistories to count.
     * @example
     * // Count the number of StatusHistories
     * const count = await prisma.statusHistory.count({
     *   where: {
     *     // ... the filter for the StatusHistories we want to count
     *   }
     * })
    **/
    count<T extends StatusHistoryCountArgs>(
      args?: Subset<T, StatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusHistoryAggregateArgs>(args: Subset<T, StatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetStatusHistoryAggregateType<T>>

    /**
     * Group by StatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusHistory model
   */
  readonly fields: StatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    changedBy<T extends StatusHistory$changedByArgs<ExtArgs> = {}>(args?: Subset<T, StatusHistory$changedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusHistory model
   */
  interface StatusHistoryFieldRefs {
    readonly id: FieldRef<"StatusHistory", 'Int'>
    readonly entityType: FieldRef<"StatusHistory", 'EntityType'>
    readonly entityId: FieldRef<"StatusHistory", 'Int'>
    readonly oldStatus: FieldRef<"StatusHistory", 'String'>
    readonly newStatus: FieldRef<"StatusHistory", 'String'>
    readonly changedByUserId: FieldRef<"StatusHistory", 'Int'>
    readonly changedAt: FieldRef<"StatusHistory", 'DateTime'>
    readonly notes: FieldRef<"StatusHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusHistory findUnique
   */
  export type StatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory findUniqueOrThrow
   */
  export type StatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory findFirst
   */
  export type StatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusHistories.
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusHistories.
     */
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * StatusHistory findFirstOrThrow
   */
  export type StatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusHistories.
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusHistories.
     */
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * StatusHistory findMany
   */
  export type StatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistories to fetch.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusHistories.
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * StatusHistory create
   */
  export type StatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusHistory.
     */
    data: XOR<StatusHistoryCreateInput, StatusHistoryUncheckedCreateInput>
  }

  /**
   * StatusHistory createMany
   */
  export type StatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusHistories.
     */
    data: StatusHistoryCreateManyInput | StatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusHistory update
   */
  export type StatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusHistory.
     */
    data: XOR<StatusHistoryUpdateInput, StatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which StatusHistory to update.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory updateMany
   */
  export type StatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusHistories.
     */
    data: XOR<StatusHistoryUpdateManyMutationInput, StatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StatusHistories to update
     */
    where?: StatusHistoryWhereInput
    /**
     * Limit how many StatusHistories to update.
     */
    limit?: number
  }

  /**
   * StatusHistory upsert
   */
  export type StatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusHistory to update in case it exists.
     */
    where: StatusHistoryWhereUniqueInput
    /**
     * In case the StatusHistory found by the `where` argument doesn't exist, create a new StatusHistory with this data.
     */
    create: XOR<StatusHistoryCreateInput, StatusHistoryUncheckedCreateInput>
    /**
     * In case the StatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusHistoryUpdateInput, StatusHistoryUncheckedUpdateInput>
  }

  /**
   * StatusHistory delete
   */
  export type StatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which StatusHistory to delete.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory deleteMany
   */
  export type StatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusHistories to delete
     */
    where?: StatusHistoryWhereInput
    /**
     * Limit how many StatusHistories to delete.
     */
    limit?: number
  }

  /**
   * StatusHistory.changedBy
   */
  export type StatusHistory$changedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * StatusHistory without action
   */
  export type StatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusHistory
     */
    omit?: StatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    businessName: 'businessName',
    contactName: 'contactName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    taxId: 'taxId',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const QuoteScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    createdByUserId: 'createdByUserId',
    quoteNumber: 'quoteNumber',
    title: 'title',
    description: 'description',
    subtotal: 'subtotal',
    discountAmount: 'discountAmount',
    taxRate: 'taxRate',
    taxAmount: 'taxAmount',
    totalAmount: 'totalAmount',
    currency: 'currency',
    status: 'status',
    validUntil: 'validUntil',
    issuedAt: 'issuedAt',
    sentAt: 'sentAt',
    viewedAt: 'viewedAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum]


  export const QuoteItemScalarFieldEnum: {
    id: 'id',
    quoteId: 'quoteId',
    itemOrder: 'itemOrder',
    title: 'title',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuoteItemScalarFieldEnum = (typeof QuoteItemScalarFieldEnum)[keyof typeof QuoteItemScalarFieldEnum]


  export const QuoteAcceptanceScalarFieldEnum: {
    id: 'id',
    quoteId: 'quoteId',
    clientId: 'clientId',
    acceptanceType: 'acceptanceType',
    acceptedTotalAmount: 'acceptedTotalAmount',
    acceptedAt: 'acceptedAt',
    clientIp: 'clientIp',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuoteAcceptanceScalarFieldEnum = (typeof QuoteAcceptanceScalarFieldEnum)[keyof typeof QuoteAcceptanceScalarFieldEnum]


  export const QuoteAcceptanceItemScalarFieldEnum: {
    id: 'id',
    quoteAcceptanceId: 'quoteAcceptanceId',
    quoteItemId: 'quoteItemId',
    acceptedPrice: 'acceptedPrice',
    createdAt: 'createdAt'
  };

  export type QuoteAcceptanceItemScalarFieldEnum = (typeof QuoteAcceptanceItemScalarFieldEnum)[keyof typeof QuoteAcceptanceItemScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    quoteId: 'quoteId',
    quoteAcceptanceId: 'quoteAcceptanceId',
    projectNumber: 'projectNumber',
    title: 'title',
    description: 'description',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    pendingAmount: 'pendingAmount',
    paidPercentage: 'paidPercentage',
    isFullyPaid: 'isFullyPaid',
    status: 'status',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    canceledAt: 'canceledAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectItemScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    quoteItemId: 'quoteItemId',
    title: 'title',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectItemScalarFieldEnum = (typeof ProjectItemScalarFieldEnum)[keyof typeof ProjectItemScalarFieldEnum]


  export const ProjectPaymentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    registeredByUserId: 'registeredByUserId',
    paymentDate: 'paymentDate',
    amount: 'amount',
    percentageEquivalent: 'percentageEquivalent',
    paymentMethod: 'paymentMethod',
    reference: 'reference',
    notes: 'notes',
    receiptFilePath: 'receiptFilePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectPaymentScalarFieldEnum = (typeof ProjectPaymentScalarFieldEnum)[keyof typeof ProjectPaymentScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    quoteId: 'quoteId',
    quoteAcceptanceId: 'quoteAcceptanceId',
    projectId: 'projectId',
    documentType: 'documentType',
    fileName: 'fileName',
    invoiceNumber: 'invoiceNumber',
    notes: 'notes',
    filePath: 'filePath',
    mimeType: 'mimeType',
    sizeInBytes: 'sizeInBytes',
    bucket: 'bucket',
    objectKey: 'objectKey',
    uploadedByUserId: 'uploadedByUserId',
    createdAt: 'createdAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const StatusHistoryScalarFieldEnum: {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    changedByUserId: 'changedByUserId',
    changedAt: 'changedAt',
    notes: 'notes'
  };

  export type StatusHistoryScalarFieldEnum = (typeof StatusHistoryScalarFieldEnum)[keyof typeof StatusHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClientOrderByRelevanceFieldEnum: {
    businessName: 'businessName',
    contactName: 'contactName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    taxId: 'taxId',
    passwordHash: 'passwordHash'
  };

  export type ClientOrderByRelevanceFieldEnum = (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum]


  export const QuoteOrderByRelevanceFieldEnum: {
    quoteNumber: 'quoteNumber',
    title: 'title',
    description: 'description',
    currency: 'currency',
    notes: 'notes'
  };

  export type QuoteOrderByRelevanceFieldEnum = (typeof QuoteOrderByRelevanceFieldEnum)[keyof typeof QuoteOrderByRelevanceFieldEnum]


  export const QuoteItemOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type QuoteItemOrderByRelevanceFieldEnum = (typeof QuoteItemOrderByRelevanceFieldEnum)[keyof typeof QuoteItemOrderByRelevanceFieldEnum]


  export const QuoteAcceptanceOrderByRelevanceFieldEnum: {
    clientIp: 'clientIp',
    notes: 'notes'
  };

  export type QuoteAcceptanceOrderByRelevanceFieldEnum = (typeof QuoteAcceptanceOrderByRelevanceFieldEnum)[keyof typeof QuoteAcceptanceOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    projectNumber: 'projectNumber',
    title: 'title',
    description: 'description',
    notes: 'notes'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const ProjectItemOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type ProjectItemOrderByRelevanceFieldEnum = (typeof ProjectItemOrderByRelevanceFieldEnum)[keyof typeof ProjectItemOrderByRelevanceFieldEnum]


  export const ProjectPaymentOrderByRelevanceFieldEnum: {
    reference: 'reference',
    notes: 'notes',
    receiptFilePath: 'receiptFilePath'
  };

  export type ProjectPaymentOrderByRelevanceFieldEnum = (typeof ProjectPaymentOrderByRelevanceFieldEnum)[keyof typeof ProjectPaymentOrderByRelevanceFieldEnum]


  export const DocumentOrderByRelevanceFieldEnum: {
    fileName: 'fileName',
    invoiceNumber: 'invoiceNumber',
    notes: 'notes',
    filePath: 'filePath',
    mimeType: 'mimeType',
    bucket: 'bucket',
    objectKey: 'objectKey'
  };

  export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum]


  export const StatusHistoryOrderByRelevanceFieldEnum: {
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    notes: 'notes'
  };

  export type StatusHistoryOrderByRelevanceFieldEnum = (typeof StatusHistoryOrderByRelevanceFieldEnum)[keyof typeof StatusHistoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'QuoteStatus'
   */
  export type EnumQuoteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuoteStatus'>
    


  /**
   * Reference to a field of type 'QuoteItemStatus'
   */
  export type EnumQuoteItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuoteItemStatus'>
    


  /**
   * Reference to a field of type 'AcceptanceType'
   */
  export type EnumAcceptanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcceptanceType'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectItemStatus'
   */
  export type EnumProjectItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectItemStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quotesCreated?: QuoteListRelationFilter
    paymentsRegistered?: ProjectPaymentListRelationFilter
    documentsUploaded?: DocumentListRelationFilter
    statusChanges?: StatusHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quotesCreated?: QuoteOrderByRelationAggregateInput
    paymentsRegistered?: ProjectPaymentOrderByRelationAggregateInput
    documentsUploaded?: DocumentOrderByRelationAggregateInput
    statusChanges?: StatusHistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quotesCreated?: QuoteListRelationFilter
    paymentsRegistered?: ProjectPaymentListRelationFilter
    documentsUploaded?: DocumentListRelationFilter
    statusChanges?: StatusHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    businessName?: StringFilter<"Client"> | string
    contactName?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    address?: StringNullableFilter<"Client"> | string | null
    taxId?: StringNullableFilter<"Client"> | string | null
    passwordHash?: StringNullableFilter<"Client"> | string | null
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    quotes?: QuoteListRelationFilter
    projects?: ProjectListRelationFilter
    documents?: DocumentListRelationFilter
    acceptances?: QuoteAcceptanceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    taxId?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quotes?: QuoteOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    acceptances?: QuoteAcceptanceOrderByRelationAggregateInput
    _relevance?: ClientOrderByRelevanceInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    businessName?: StringFilter<"Client"> | string
    contactName?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    address?: StringNullableFilter<"Client"> | string | null
    taxId?: StringNullableFilter<"Client"> | string | null
    passwordHash?: StringNullableFilter<"Client"> | string | null
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    quotes?: QuoteListRelationFilter
    projects?: ProjectListRelationFilter
    documents?: DocumentListRelationFilter
    acceptances?: QuoteAcceptanceListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    taxId?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    businessName?: StringWithAggregatesFilter<"Client"> | string
    contactName?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    taxId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Client"> | string | null
    isActive?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type QuoteWhereInput = {
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    id?: IntFilter<"Quote"> | number
    clientId?: IntFilter<"Quote"> | number
    createdByUserId?: IntFilter<"Quote"> | number
    quoteNumber?: StringFilter<"Quote"> | string
    title?: StringFilter<"Quote"> | string
    description?: StringNullableFilter<"Quote"> | string | null
    subtotal?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Quote"> | string
    status?: EnumQuoteStatusFilter<"Quote"> | $Enums.QuoteStatus
    validUntil?: DateTimeNullableFilter<"Quote"> | Date | string | null
    issuedAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    viewedAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    notes?: StringNullableFilter<"Quote"> | string | null
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    updatedAt?: DateTimeFilter<"Quote"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: QuoteItemListRelationFilter
    acceptances?: QuoteAcceptanceListRelationFilter
    projects?: ProjectListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type QuoteOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    quoteNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    issuedAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    viewedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    items?: QuoteItemOrderByRelationAggregateInput
    acceptances?: QuoteAcceptanceOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    _relevance?: QuoteOrderByRelevanceInput
  }

  export type QuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    quoteNumber?: string
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    clientId?: IntFilter<"Quote"> | number
    createdByUserId?: IntFilter<"Quote"> | number
    title?: StringFilter<"Quote"> | string
    description?: StringNullableFilter<"Quote"> | string | null
    subtotal?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Quote"> | string
    status?: EnumQuoteStatusFilter<"Quote"> | $Enums.QuoteStatus
    validUntil?: DateTimeNullableFilter<"Quote"> | Date | string | null
    issuedAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    viewedAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    notes?: StringNullableFilter<"Quote"> | string | null
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    updatedAt?: DateTimeFilter<"Quote"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: QuoteItemListRelationFilter
    acceptances?: QuoteAcceptanceListRelationFilter
    projects?: ProjectListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "quoteNumber">

  export type QuoteOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    quoteNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    issuedAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    viewedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuoteCountOrderByAggregateInput
    _avg?: QuoteAvgOrderByAggregateInput
    _max?: QuoteMaxOrderByAggregateInput
    _min?: QuoteMinOrderByAggregateInput
    _sum?: QuoteSumOrderByAggregateInput
  }

  export type QuoteScalarWhereWithAggregatesInput = {
    AND?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    OR?: QuoteScalarWhereWithAggregatesInput[]
    NOT?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quote"> | number
    clientId?: IntWithAggregatesFilter<"Quote"> | number
    createdByUserId?: IntWithAggregatesFilter<"Quote"> | number
    quoteNumber?: StringWithAggregatesFilter<"Quote"> | string
    title?: StringWithAggregatesFilter<"Quote"> | string
    description?: StringNullableWithAggregatesFilter<"Quote"> | string | null
    subtotal?: DecimalWithAggregatesFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalWithAggregatesFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Quote"> | string
    status?: EnumQuoteStatusWithAggregatesFilter<"Quote"> | $Enums.QuoteStatus
    validUntil?: DateTimeNullableWithAggregatesFilter<"Quote"> | Date | string | null
    issuedAt?: DateTimeNullableWithAggregatesFilter<"Quote"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Quote"> | Date | string | null
    viewedAt?: DateTimeNullableWithAggregatesFilter<"Quote"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Quote"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quote"> | Date | string
  }

  export type QuoteItemWhereInput = {
    AND?: QuoteItemWhereInput | QuoteItemWhereInput[]
    OR?: QuoteItemWhereInput[]
    NOT?: QuoteItemWhereInput | QuoteItemWhereInput[]
    id?: IntFilter<"QuoteItem"> | number
    quoteId?: IntFilter<"QuoteItem"> | number
    itemOrder?: IntFilter<"QuoteItem"> | number
    title?: StringFilter<"QuoteItem"> | string
    description?: StringNullableFilter<"QuoteItem"> | string | null
    quantity?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFilter<"QuoteItem"> | $Enums.QuoteItemStatus
    createdAt?: DateTimeFilter<"QuoteItem"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteItem"> | Date | string
    quote?: XOR<QuoteScalarRelationFilter, QuoteWhereInput>
    acceptanceItems?: QuoteAcceptanceItemListRelationFilter
  }

  export type QuoteItemOrderByWithRelationInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quote?: QuoteOrderByWithRelationInput
    acceptanceItems?: QuoteAcceptanceItemOrderByRelationAggregateInput
    _relevance?: QuoteItemOrderByRelevanceInput
  }

  export type QuoteItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuoteItemWhereInput | QuoteItemWhereInput[]
    OR?: QuoteItemWhereInput[]
    NOT?: QuoteItemWhereInput | QuoteItemWhereInput[]
    quoteId?: IntFilter<"QuoteItem"> | number
    itemOrder?: IntFilter<"QuoteItem"> | number
    title?: StringFilter<"QuoteItem"> | string
    description?: StringNullableFilter<"QuoteItem"> | string | null
    quantity?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFilter<"QuoteItem"> | $Enums.QuoteItemStatus
    createdAt?: DateTimeFilter<"QuoteItem"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteItem"> | Date | string
    quote?: XOR<QuoteScalarRelationFilter, QuoteWhereInput>
    acceptanceItems?: QuoteAcceptanceItemListRelationFilter
  }, "id">

  export type QuoteItemOrderByWithAggregationInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuoteItemCountOrderByAggregateInput
    _avg?: QuoteItemAvgOrderByAggregateInput
    _max?: QuoteItemMaxOrderByAggregateInput
    _min?: QuoteItemMinOrderByAggregateInput
    _sum?: QuoteItemSumOrderByAggregateInput
  }

  export type QuoteItemScalarWhereWithAggregatesInput = {
    AND?: QuoteItemScalarWhereWithAggregatesInput | QuoteItemScalarWhereWithAggregatesInput[]
    OR?: QuoteItemScalarWhereWithAggregatesInput[]
    NOT?: QuoteItemScalarWhereWithAggregatesInput | QuoteItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuoteItem"> | number
    quoteId?: IntWithAggregatesFilter<"QuoteItem"> | number
    itemOrder?: IntWithAggregatesFilter<"QuoteItem"> | number
    title?: StringWithAggregatesFilter<"QuoteItem"> | string
    description?: StringNullableWithAggregatesFilter<"QuoteItem"> | string | null
    quantity?: DecimalWithAggregatesFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalWithAggregatesFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusWithAggregatesFilter<"QuoteItem"> | $Enums.QuoteItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"QuoteItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuoteItem"> | Date | string
  }

  export type QuoteAcceptanceWhereInput = {
    AND?: QuoteAcceptanceWhereInput | QuoteAcceptanceWhereInput[]
    OR?: QuoteAcceptanceWhereInput[]
    NOT?: QuoteAcceptanceWhereInput | QuoteAcceptanceWhereInput[]
    id?: IntFilter<"QuoteAcceptance"> | number
    quoteId?: IntFilter<"QuoteAcceptance"> | number
    clientId?: IntFilter<"QuoteAcceptance"> | number
    acceptanceType?: EnumAcceptanceTypeFilter<"QuoteAcceptance"> | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFilter<"QuoteAcceptance"> | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    clientIp?: StringNullableFilter<"QuoteAcceptance"> | string | null
    notes?: StringNullableFilter<"QuoteAcceptance"> | string | null
    createdAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    quote?: XOR<QuoteScalarRelationFilter, QuoteWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    items?: QuoteAcceptanceItemListRelationFilter
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    documents?: DocumentListRelationFilter
  }

  export type QuoteAcceptanceOrderByWithRelationInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptanceType?: SortOrder
    acceptedTotalAmount?: SortOrder
    acceptedAt?: SortOrder
    clientIp?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quote?: QuoteOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    items?: QuoteAcceptanceItemOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    _relevance?: QuoteAcceptanceOrderByRelevanceInput
  }

  export type QuoteAcceptanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuoteAcceptanceWhereInput | QuoteAcceptanceWhereInput[]
    OR?: QuoteAcceptanceWhereInput[]
    NOT?: QuoteAcceptanceWhereInput | QuoteAcceptanceWhereInput[]
    quoteId?: IntFilter<"QuoteAcceptance"> | number
    clientId?: IntFilter<"QuoteAcceptance"> | number
    acceptanceType?: EnumAcceptanceTypeFilter<"QuoteAcceptance"> | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFilter<"QuoteAcceptance"> | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    clientIp?: StringNullableFilter<"QuoteAcceptance"> | string | null
    notes?: StringNullableFilter<"QuoteAcceptance"> | string | null
    createdAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    quote?: XOR<QuoteScalarRelationFilter, QuoteWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    items?: QuoteAcceptanceItemListRelationFilter
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    documents?: DocumentListRelationFilter
  }, "id">

  export type QuoteAcceptanceOrderByWithAggregationInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptanceType?: SortOrder
    acceptedTotalAmount?: SortOrder
    acceptedAt?: SortOrder
    clientIp?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuoteAcceptanceCountOrderByAggregateInput
    _avg?: QuoteAcceptanceAvgOrderByAggregateInput
    _max?: QuoteAcceptanceMaxOrderByAggregateInput
    _min?: QuoteAcceptanceMinOrderByAggregateInput
    _sum?: QuoteAcceptanceSumOrderByAggregateInput
  }

  export type QuoteAcceptanceScalarWhereWithAggregatesInput = {
    AND?: QuoteAcceptanceScalarWhereWithAggregatesInput | QuoteAcceptanceScalarWhereWithAggregatesInput[]
    OR?: QuoteAcceptanceScalarWhereWithAggregatesInput[]
    NOT?: QuoteAcceptanceScalarWhereWithAggregatesInput | QuoteAcceptanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuoteAcceptance"> | number
    quoteId?: IntWithAggregatesFilter<"QuoteAcceptance"> | number
    clientId?: IntWithAggregatesFilter<"QuoteAcceptance"> | number
    acceptanceType?: EnumAcceptanceTypeWithAggregatesFilter<"QuoteAcceptance"> | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalWithAggregatesFilter<"QuoteAcceptance"> | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeWithAggregatesFilter<"QuoteAcceptance"> | Date | string
    clientIp?: StringNullableWithAggregatesFilter<"QuoteAcceptance"> | string | null
    notes?: StringNullableWithAggregatesFilter<"QuoteAcceptance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuoteAcceptance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuoteAcceptance"> | Date | string
  }

  export type QuoteAcceptanceItemWhereInput = {
    AND?: QuoteAcceptanceItemWhereInput | QuoteAcceptanceItemWhereInput[]
    OR?: QuoteAcceptanceItemWhereInput[]
    NOT?: QuoteAcceptanceItemWhereInput | QuoteAcceptanceItemWhereInput[]
    id?: IntFilter<"QuoteAcceptanceItem"> | number
    quoteAcceptanceId?: IntFilter<"QuoteAcceptanceItem"> | number
    quoteItemId?: IntFilter<"QuoteAcceptanceItem"> | number
    acceptedPrice?: DecimalFilter<"QuoteAcceptanceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"QuoteAcceptanceItem"> | Date | string
    acceptance?: XOR<QuoteAcceptanceScalarRelationFilter, QuoteAcceptanceWhereInput>
    quoteItem?: XOR<QuoteItemScalarRelationFilter, QuoteItemWhereInput>
  }

  export type QuoteAcceptanceItemOrderByWithRelationInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
    createdAt?: SortOrder
    acceptance?: QuoteAcceptanceOrderByWithRelationInput
    quoteItem?: QuoteItemOrderByWithRelationInput
  }

  export type QuoteAcceptanceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuoteAcceptanceItemWhereInput | QuoteAcceptanceItemWhereInput[]
    OR?: QuoteAcceptanceItemWhereInput[]
    NOT?: QuoteAcceptanceItemWhereInput | QuoteAcceptanceItemWhereInput[]
    quoteAcceptanceId?: IntFilter<"QuoteAcceptanceItem"> | number
    quoteItemId?: IntFilter<"QuoteAcceptanceItem"> | number
    acceptedPrice?: DecimalFilter<"QuoteAcceptanceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"QuoteAcceptanceItem"> | Date | string
    acceptance?: XOR<QuoteAcceptanceScalarRelationFilter, QuoteAcceptanceWhereInput>
    quoteItem?: XOR<QuoteItemScalarRelationFilter, QuoteItemWhereInput>
  }, "id">

  export type QuoteAcceptanceItemOrderByWithAggregationInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
    createdAt?: SortOrder
    _count?: QuoteAcceptanceItemCountOrderByAggregateInput
    _avg?: QuoteAcceptanceItemAvgOrderByAggregateInput
    _max?: QuoteAcceptanceItemMaxOrderByAggregateInput
    _min?: QuoteAcceptanceItemMinOrderByAggregateInput
    _sum?: QuoteAcceptanceItemSumOrderByAggregateInput
  }

  export type QuoteAcceptanceItemScalarWhereWithAggregatesInput = {
    AND?: QuoteAcceptanceItemScalarWhereWithAggregatesInput | QuoteAcceptanceItemScalarWhereWithAggregatesInput[]
    OR?: QuoteAcceptanceItemScalarWhereWithAggregatesInput[]
    NOT?: QuoteAcceptanceItemScalarWhereWithAggregatesInput | QuoteAcceptanceItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuoteAcceptanceItem"> | number
    quoteAcceptanceId?: IntWithAggregatesFilter<"QuoteAcceptanceItem"> | number
    quoteItemId?: IntWithAggregatesFilter<"QuoteAcceptanceItem"> | number
    acceptedPrice?: DecimalWithAggregatesFilter<"QuoteAcceptanceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"QuoteAcceptanceItem"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    clientId?: IntFilter<"Project"> | number
    quoteId?: IntFilter<"Project"> | number
    quoteAcceptanceId?: IntFilter<"Project"> | number
    projectNumber?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    totalAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFilter<"Project"> | boolean
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    notes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    quote?: XOR<QuoteScalarRelationFilter, QuoteWhereInput>
    acceptance?: XOR<QuoteAcceptanceScalarRelationFilter, QuoteAcceptanceWhereInput>
    items?: ProjectItemListRelationFilter
    payments?: ProjectPaymentListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
    isFullyPaid?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    quote?: QuoteOrderByWithRelationInput
    acceptance?: QuoteAcceptanceOrderByWithRelationInput
    items?: ProjectItemOrderByRelationAggregateInput
    payments?: ProjectPaymentOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    quoteAcceptanceId?: number
    projectNumber?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    clientId?: IntFilter<"Project"> | number
    quoteId?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    totalAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFilter<"Project"> | boolean
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    notes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    quote?: XOR<QuoteScalarRelationFilter, QuoteWhereInput>
    acceptance?: XOR<QuoteAcceptanceScalarRelationFilter, QuoteAcceptanceWhereInput>
    items?: ProjectItemListRelationFilter
    payments?: ProjectPaymentListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "quoteAcceptanceId" | "projectNumber">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectNumber?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
    isFullyPaid?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    clientId?: IntWithAggregatesFilter<"Project"> | number
    quoteId?: IntWithAggregatesFilter<"Project"> | number
    quoteAcceptanceId?: IntWithAggregatesFilter<"Project"> | number
    projectNumber?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    totalAmount?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolWithAggregatesFilter<"Project"> | boolean
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    startedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectItemWhereInput = {
    AND?: ProjectItemWhereInput | ProjectItemWhereInput[]
    OR?: ProjectItemWhereInput[]
    NOT?: ProjectItemWhereInput | ProjectItemWhereInput[]
    id?: IntFilter<"ProjectItem"> | number
    projectId?: IntFilter<"ProjectItem"> | number
    quoteItemId?: IntNullableFilter<"ProjectItem"> | number | null
    title?: StringFilter<"ProjectItem"> | string
    description?: StringNullableFilter<"ProjectItem"> | string | null
    quantity?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFilter<"ProjectItem"> | $Enums.ProjectItemStatus
    createdAt?: DateTimeFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectItem"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectItemOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    _relevance?: ProjectItemOrderByRelevanceInput
  }

  export type ProjectItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectItemWhereInput | ProjectItemWhereInput[]
    OR?: ProjectItemWhereInput[]
    NOT?: ProjectItemWhereInput | ProjectItemWhereInput[]
    projectId?: IntFilter<"ProjectItem"> | number
    quoteItemId?: IntNullableFilter<"ProjectItem"> | number | null
    title?: StringFilter<"ProjectItem"> | string
    description?: StringNullableFilter<"ProjectItem"> | string | null
    quantity?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFilter<"ProjectItem"> | $Enums.ProjectItemStatus
    createdAt?: DateTimeFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectItem"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectItemOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectItemCountOrderByAggregateInput
    _avg?: ProjectItemAvgOrderByAggregateInput
    _max?: ProjectItemMaxOrderByAggregateInput
    _min?: ProjectItemMinOrderByAggregateInput
    _sum?: ProjectItemSumOrderByAggregateInput
  }

  export type ProjectItemScalarWhereWithAggregatesInput = {
    AND?: ProjectItemScalarWhereWithAggregatesInput | ProjectItemScalarWhereWithAggregatesInput[]
    OR?: ProjectItemScalarWhereWithAggregatesInput[]
    NOT?: ProjectItemScalarWhereWithAggregatesInput | ProjectItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectItem"> | number
    projectId?: IntWithAggregatesFilter<"ProjectItem"> | number
    quoteItemId?: IntNullableWithAggregatesFilter<"ProjectItem"> | number | null
    title?: StringWithAggregatesFilter<"ProjectItem"> | string
    description?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    quantity?: DecimalWithAggregatesFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalWithAggregatesFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusWithAggregatesFilter<"ProjectItem"> | $Enums.ProjectItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectItem"> | Date | string
  }

  export type ProjectPaymentWhereInput = {
    AND?: ProjectPaymentWhereInput | ProjectPaymentWhereInput[]
    OR?: ProjectPaymentWhereInput[]
    NOT?: ProjectPaymentWhereInput | ProjectPaymentWhereInput[]
    id?: IntFilter<"ProjectPayment"> | number
    projectId?: IntFilter<"ProjectPayment"> | number
    registeredByUserId?: IntFilter<"ProjectPayment"> | number
    paymentDate?: DateTimeFilter<"ProjectPayment"> | Date | string
    amount?: DecimalFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"ProjectPayment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"ProjectPayment"> | string | null
    notes?: StringNullableFilter<"ProjectPayment"> | string | null
    receiptFilePath?: StringNullableFilter<"ProjectPayment"> | string | null
    createdAt?: DateTimeFilter<"ProjectPayment"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPayment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    registeredBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectPaymentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    receiptFilePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    registeredBy?: UserOrderByWithRelationInput
    _relevance?: ProjectPaymentOrderByRelevanceInput
  }

  export type ProjectPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectPaymentWhereInput | ProjectPaymentWhereInput[]
    OR?: ProjectPaymentWhereInput[]
    NOT?: ProjectPaymentWhereInput | ProjectPaymentWhereInput[]
    projectId?: IntFilter<"ProjectPayment"> | number
    registeredByUserId?: IntFilter<"ProjectPayment"> | number
    paymentDate?: DateTimeFilter<"ProjectPayment"> | Date | string
    amount?: DecimalFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"ProjectPayment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"ProjectPayment"> | string | null
    notes?: StringNullableFilter<"ProjectPayment"> | string | null
    receiptFilePath?: StringNullableFilter<"ProjectPayment"> | string | null
    createdAt?: DateTimeFilter<"ProjectPayment"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPayment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    registeredBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    receiptFilePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectPaymentCountOrderByAggregateInput
    _avg?: ProjectPaymentAvgOrderByAggregateInput
    _max?: ProjectPaymentMaxOrderByAggregateInput
    _min?: ProjectPaymentMinOrderByAggregateInput
    _sum?: ProjectPaymentSumOrderByAggregateInput
  }

  export type ProjectPaymentScalarWhereWithAggregatesInput = {
    AND?: ProjectPaymentScalarWhereWithAggregatesInput | ProjectPaymentScalarWhereWithAggregatesInput[]
    OR?: ProjectPaymentScalarWhereWithAggregatesInput[]
    NOT?: ProjectPaymentScalarWhereWithAggregatesInput | ProjectPaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectPayment"> | number
    projectId?: IntWithAggregatesFilter<"ProjectPayment"> | number
    registeredByUserId?: IntWithAggregatesFilter<"ProjectPayment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"ProjectPayment"> | Date | string
    amount?: DecimalWithAggregatesFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalWithAggregatesFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"ProjectPayment"> | $Enums.PaymentMethod
    reference?: StringNullableWithAggregatesFilter<"ProjectPayment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ProjectPayment"> | string | null
    receiptFilePath?: StringNullableWithAggregatesFilter<"ProjectPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectPayment"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    clientId?: IntNullableFilter<"Document"> | number | null
    quoteId?: IntNullableFilter<"Document"> | number | null
    quoteAcceptanceId?: IntNullableFilter<"Document"> | number | null
    projectId?: IntNullableFilter<"Document"> | number | null
    documentType?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileName?: StringFilter<"Document"> | string
    invoiceNumber?: StringNullableFilter<"Document"> | string | null
    notes?: StringNullableFilter<"Document"> | string | null
    filePath?: StringNullableFilter<"Document"> | string | null
    mimeType?: StringNullableFilter<"Document"> | string | null
    sizeInBytes?: IntNullableFilter<"Document"> | number | null
    bucket?: StringNullableFilter<"Document"> | string | null
    objectKey?: StringNullableFilter<"Document"> | string | null
    uploadedByUserId?: IntNullableFilter<"Document"> | number | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    quote?: XOR<QuoteNullableScalarRelationFilter, QuoteWhereInput> | null
    acceptance?: XOR<QuoteAcceptanceNullableScalarRelationFilter, QuoteAcceptanceWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    quoteId?: SortOrderInput | SortOrder
    quoteAcceptanceId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    sizeInBytes?: SortOrderInput | SortOrder
    bucket?: SortOrderInput | SortOrder
    objectKey?: SortOrderInput | SortOrder
    uploadedByUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    quote?: QuoteOrderByWithRelationInput
    acceptance?: QuoteAcceptanceOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
    _relevance?: DocumentOrderByRelevanceInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    clientId?: IntNullableFilter<"Document"> | number | null
    quoteId?: IntNullableFilter<"Document"> | number | null
    quoteAcceptanceId?: IntNullableFilter<"Document"> | number | null
    projectId?: IntNullableFilter<"Document"> | number | null
    documentType?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileName?: StringFilter<"Document"> | string
    invoiceNumber?: StringNullableFilter<"Document"> | string | null
    notes?: StringNullableFilter<"Document"> | string | null
    filePath?: StringNullableFilter<"Document"> | string | null
    mimeType?: StringNullableFilter<"Document"> | string | null
    sizeInBytes?: IntNullableFilter<"Document"> | number | null
    bucket?: StringNullableFilter<"Document"> | string | null
    objectKey?: StringNullableFilter<"Document"> | string | null
    uploadedByUserId?: IntNullableFilter<"Document"> | number | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    quote?: XOR<QuoteNullableScalarRelationFilter, QuoteWhereInput> | null
    acceptance?: XOR<QuoteAcceptanceNullableScalarRelationFilter, QuoteAcceptanceWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    quoteId?: SortOrderInput | SortOrder
    quoteAcceptanceId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    sizeInBytes?: SortOrderInput | SortOrder
    bucket?: SortOrderInput | SortOrder
    objectKey?: SortOrderInput | SortOrder
    uploadedByUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    clientId?: IntNullableWithAggregatesFilter<"Document"> | number | null
    quoteId?: IntNullableWithAggregatesFilter<"Document"> | number | null
    quoteAcceptanceId?: IntNullableWithAggregatesFilter<"Document"> | number | null
    projectId?: IntNullableWithAggregatesFilter<"Document"> | number | null
    documentType?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    fileName?: StringWithAggregatesFilter<"Document"> | string
    invoiceNumber?: StringNullableWithAggregatesFilter<"Document"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Document"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"Document"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"Document"> | string | null
    sizeInBytes?: IntNullableWithAggregatesFilter<"Document"> | number | null
    bucket?: StringNullableWithAggregatesFilter<"Document"> | string | null
    objectKey?: StringNullableWithAggregatesFilter<"Document"> | string | null
    uploadedByUserId?: IntNullableWithAggregatesFilter<"Document"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type StatusHistoryWhereInput = {
    AND?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    OR?: StatusHistoryWhereInput[]
    NOT?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    id?: IntFilter<"StatusHistory"> | number
    entityType?: EnumEntityTypeFilter<"StatusHistory"> | $Enums.EntityType
    entityId?: IntFilter<"StatusHistory"> | number
    oldStatus?: StringFilter<"StatusHistory"> | string
    newStatus?: StringFilter<"StatusHistory"> | string
    changedByUserId?: IntNullableFilter<"StatusHistory"> | number | null
    changedAt?: DateTimeFilter<"StatusHistory"> | Date | string
    notes?: StringNullableFilter<"StatusHistory"> | string | null
    changedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type StatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    changedByUserId?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    changedBy?: UserOrderByWithRelationInput
    _relevance?: StatusHistoryOrderByRelevanceInput
  }

  export type StatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    OR?: StatusHistoryWhereInput[]
    NOT?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    entityType?: EnumEntityTypeFilter<"StatusHistory"> | $Enums.EntityType
    entityId?: IntFilter<"StatusHistory"> | number
    oldStatus?: StringFilter<"StatusHistory"> | string
    newStatus?: StringFilter<"StatusHistory"> | string
    changedByUserId?: IntNullableFilter<"StatusHistory"> | number | null
    changedAt?: DateTimeFilter<"StatusHistory"> | Date | string
    notes?: StringNullableFilter<"StatusHistory"> | string | null
    changedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type StatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    changedByUserId?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: StatusHistoryCountOrderByAggregateInput
    _avg?: StatusHistoryAvgOrderByAggregateInput
    _max?: StatusHistoryMaxOrderByAggregateInput
    _min?: StatusHistoryMinOrderByAggregateInput
    _sum?: StatusHistorySumOrderByAggregateInput
  }

  export type StatusHistoryScalarWhereWithAggregatesInput = {
    AND?: StatusHistoryScalarWhereWithAggregatesInput | StatusHistoryScalarWhereWithAggregatesInput[]
    OR?: StatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: StatusHistoryScalarWhereWithAggregatesInput | StatusHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StatusHistory"> | number
    entityType?: EnumEntityTypeWithAggregatesFilter<"StatusHistory"> | $Enums.EntityType
    entityId?: IntWithAggregatesFilter<"StatusHistory"> | number
    oldStatus?: StringWithAggregatesFilter<"StatusHistory"> | string
    newStatus?: StringWithAggregatesFilter<"StatusHistory"> | string
    changedByUserId?: IntNullableWithAggregatesFilter<"StatusHistory"> | number | null
    changedAt?: DateTimeWithAggregatesFilter<"StatusHistory"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"StatusHistory"> | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteCreateNestedManyWithoutCreatedByInput
    paymentsRegistered?: ProjectPaymentCreateNestedManyWithoutRegisteredByInput
    documentsUploaded?: DocumentCreateNestedManyWithoutUploadedByInput
    statusChanges?: StatusHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteUncheckedCreateNestedManyWithoutCreatedByInput
    paymentsRegistered?: ProjectPaymentUncheckedCreateNestedManyWithoutRegisteredByInput
    documentsUploaded?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    statusChanges?: StatusHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUpdateManyWithoutCreatedByNestedInput
    paymentsRegistered?: ProjectPaymentUpdateManyWithoutRegisteredByNestedInput
    documentsUploaded?: DocumentUpdateManyWithoutUploadedByNestedInput
    statusChanges?: StatusHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUncheckedUpdateManyWithoutCreatedByNestedInput
    paymentsRegistered?: ProjectPaymentUncheckedUpdateManyWithoutRegisteredByNestedInput
    documentsUploaded?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    statusChanges?: StatusHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteCreateNestedManyWithoutClientInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteUncheckedCreateNestedManyWithoutClientInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUpdateManyWithoutClientNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUncheckedUpdateManyWithoutClientNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteCreateInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutQuotesInput
    createdBy: UserCreateNestedOneWithoutQuotesCreatedInput
    items?: QuoteItemCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutQuoteInput
    projects?: ProjectCreateNestedManyWithoutQuoteInput
    documents?: DocumentCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateInput = {
    id?: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteItemUncheckedCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput
    projects?: ProjectUncheckedCreateNestedManyWithoutQuoteInput
    documents?: DocumentUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUpdateInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutQuotesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuotesCreatedNestedInput
    items?: QuoteItemUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteCreateManyInput = {
    id?: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuoteUpdateManyMutationInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteItemCreateInput = {
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutItemsInput
    acceptanceItems?: QuoteAcceptanceItemCreateNestedManyWithoutQuoteItemInput
  }

  export type QuoteItemUncheckedCreateInput = {
    id?: number
    quoteId: number
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptanceItems?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutQuoteItemInput
  }

  export type QuoteItemUpdateInput = {
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutItemsNestedInput
    acceptanceItems?: QuoteAcceptanceItemUpdateManyWithoutQuoteItemNestedInput
  }

  export type QuoteItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptanceItems?: QuoteAcceptanceItemUncheckedUpdateManyWithoutQuoteItemNestedInput
  }

  export type QuoteItemCreateManyInput = {
    id?: number
    quoteId: number
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuoteItemUpdateManyMutationInput = {
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceCreateInput = {
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutAcceptancesInput
    client: ClientCreateNestedOneWithoutAcceptancesInput
    items?: QuoteAcceptanceItemCreateNestedManyWithoutAcceptanceInput
    project?: ProjectCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUncheckedCreateInput = {
    id?: number
    quoteId: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutAcceptanceInput
    project?: ProjectUncheckedCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUpdateInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutAcceptancesNestedInput
    client?: ClientUpdateOneRequiredWithoutAcceptancesNestedInput
    items?: QuoteAcceptanceItemUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUncheckedUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceCreateManyInput = {
    id?: number
    quoteId: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuoteAcceptanceUpdateManyMutationInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemCreateInput = {
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    acceptance: QuoteAcceptanceCreateNestedOneWithoutItemsInput
    quoteItem: QuoteItemCreateNestedOneWithoutAcceptanceItemsInput
  }

  export type QuoteAcceptanceItemUncheckedCreateInput = {
    id?: number
    quoteAcceptanceId: number
    quoteItemId: number
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type QuoteAcceptanceItemUpdateInput = {
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutItemsNestedInput
    quoteItem?: QuoteItemUpdateOneRequiredWithoutAcceptanceItemsNestedInput
  }

  export type QuoteAcceptanceItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    quoteItemId?: IntFieldUpdateOperationsInput | number
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemCreateManyInput = {
    id?: number
    quoteAcceptanceId: number
    quoteItemId: number
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type QuoteAcceptanceItemUpdateManyMutationInput = {
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    quoteItemId?: IntFieldUpdateOperationsInput | number
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    quote: QuoteCreateNestedOneWithoutProjectsInput
    acceptance: QuoteAcceptanceCreateNestedOneWithoutProjectInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentCreateNestedManyWithoutProjectInput
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    quote?: QuoteUpdateOneRequiredWithoutProjectsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUpdateManyWithoutProjectNestedInput
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemCreateInput = {
    quoteItemId?: number | null
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.ProjectItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutItemsInput
  }

  export type ProjectItemUncheckedCreateInput = {
    id?: number
    projectId: number
    quoteItemId?: number | null
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.ProjectItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUpdateInput = {
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ProjectItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemCreateManyInput = {
    id?: number
    projectId: number
    quoteItemId?: number | null
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.ProjectItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUpdateManyMutationInput = {
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentCreateInput = {
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPaymentsInput
    registeredBy: UserCreateNestedOneWithoutPaymentsRegisteredInput
  }

  export type ProjectPaymentUncheckedCreateInput = {
    id?: number
    projectId: number
    registeredByUserId: number
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPaymentUpdateInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPaymentsNestedInput
    registeredBy?: UserUpdateOneRequiredWithoutPaymentsRegisteredNestedInput
  }

  export type ProjectPaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    registeredByUserId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentCreateManyInput = {
    id?: number
    projectId: number
    registeredByUserId: number
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPaymentUpdateManyMutationInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    registeredByUserId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
    client?: ClientCreateNestedOneWithoutDocumentsInput
    quote?: QuoteCreateNestedOneWithoutDocumentsInput
    acceptance?: QuoteAcceptanceCreateNestedOneWithoutDocumentsInput
    project?: ProjectCreateNestedOneWithoutDocumentsInput
    uploadedBy?: UserCreateNestedOneWithoutDocumentsUploadedInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type DocumentUpdateInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutDocumentsNestedInput
    quote?: QuoteUpdateOneWithoutDocumentsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneWithoutDocumentsNestedInput
    project?: ProjectUpdateOneWithoutDocumentsNestedInput
    uploadedBy?: UserUpdateOneWithoutDocumentsUploadedNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryCreateInput = {
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedAt?: Date | string
    notes?: string | null
    changedBy?: UserCreateNestedOneWithoutStatusChangesInput
  }

  export type StatusHistoryUncheckedCreateInput = {
    id?: number
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedByUserId?: number | null
    changedAt?: Date | string
    notes?: string | null
  }

  export type StatusHistoryUpdateInput = {
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    changedBy?: UserUpdateOneWithoutStatusChangesNestedInput
  }

  export type StatusHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusHistoryCreateManyInput = {
    id?: number
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedByUserId?: number | null
    changedAt?: Date | string
    notes?: string | null
  }

  export type StatusHistoryUpdateManyMutationInput = {
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuoteListRelationFilter = {
    every?: QuoteWhereInput
    some?: QuoteWhereInput
    none?: QuoteWhereInput
  }

  export type ProjectPaymentListRelationFilter = {
    every?: ProjectPaymentWhereInput
    some?: ProjectPaymentWhereInput
    none?: ProjectPaymentWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type StatusHistoryListRelationFilter = {
    every?: StatusHistoryWhereInput
    some?: StatusHistoryWhereInput
    none?: StatusHistoryWhereInput
  }

  export type QuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type QuoteAcceptanceListRelationFilter = {
    every?: QuoteAcceptanceWhereInput
    some?: QuoteAcceptanceWhereInput
    none?: QuoteAcceptanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteAcceptanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    taxId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    taxId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    taxId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumQuoteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusFilter<$PrismaModel> | $Enums.QuoteStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuoteItemListRelationFilter = {
    every?: QuoteItemWhereInput
    some?: QuoteItemWhereInput
    none?: QuoteItemWhereInput
  }

  export type QuoteItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteOrderByRelevanceInput = {
    fields: QuoteOrderByRelevanceFieldEnum | QuoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuoteCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    quoteNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    issuedAt?: SortOrder
    sentAt?: SortOrder
    viewedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type QuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    quoteNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    issuedAt?: SortOrder
    sentAt?: SortOrder
    viewedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    quoteNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    issuedAt?: SortOrder
    sentAt?: SortOrder
    viewedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    createdByUserId?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumQuoteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuoteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuoteStatusFilter<$PrismaModel>
    _max?: NestedEnumQuoteStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumQuoteItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteItemStatus | EnumQuoteItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteItemStatus[]
    notIn?: $Enums.QuoteItemStatus[]
    not?: NestedEnumQuoteItemStatusFilter<$PrismaModel> | $Enums.QuoteItemStatus
  }

  export type QuoteScalarRelationFilter = {
    is?: QuoteWhereInput
    isNot?: QuoteWhereInput
  }

  export type QuoteAcceptanceItemListRelationFilter = {
    every?: QuoteAcceptanceItemWhereInput
    some?: QuoteAcceptanceItemWhereInput
    none?: QuoteAcceptanceItemWhereInput
  }

  export type QuoteAcceptanceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteItemOrderByRelevanceInput = {
    fields: QuoteItemOrderByRelevanceFieldEnum | QuoteItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuoteItemCountOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    title?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type QuoteItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    title?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteItemMinOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    title?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteItemSumOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    itemOrder?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumQuoteItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteItemStatus | EnumQuoteItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteItemStatus[]
    notIn?: $Enums.QuoteItemStatus[]
    not?: NestedEnumQuoteItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuoteItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuoteItemStatusFilter<$PrismaModel>
    _max?: NestedEnumQuoteItemStatusFilter<$PrismaModel>
  }

  export type EnumAcceptanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AcceptanceType | EnumAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcceptanceType[]
    notIn?: $Enums.AcceptanceType[]
    not?: NestedEnumAcceptanceTypeFilter<$PrismaModel> | $Enums.AcceptanceType
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type QuoteAcceptanceOrderByRelevanceInput = {
    fields: QuoteAcceptanceOrderByRelevanceFieldEnum | QuoteAcceptanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuoteAcceptanceCountOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptanceType?: SortOrder
    acceptedTotalAmount?: SortOrder
    acceptedAt?: SortOrder
    clientIp?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteAcceptanceAvgOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptedTotalAmount?: SortOrder
  }

  export type QuoteAcceptanceMaxOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptanceType?: SortOrder
    acceptedTotalAmount?: SortOrder
    acceptedAt?: SortOrder
    clientIp?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteAcceptanceMinOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptanceType?: SortOrder
    acceptedTotalAmount?: SortOrder
    acceptedAt?: SortOrder
    clientIp?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuoteAcceptanceSumOrderByAggregateInput = {
    id?: SortOrder
    quoteId?: SortOrder
    clientId?: SortOrder
    acceptedTotalAmount?: SortOrder
  }

  export type EnumAcceptanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcceptanceType | EnumAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcceptanceType[]
    notIn?: $Enums.AcceptanceType[]
    not?: NestedEnumAcceptanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AcceptanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcceptanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAcceptanceTypeFilter<$PrismaModel>
  }

  export type QuoteAcceptanceScalarRelationFilter = {
    is?: QuoteAcceptanceWhereInput
    isNot?: QuoteAcceptanceWhereInput
  }

  export type QuoteItemScalarRelationFilter = {
    is?: QuoteItemWhereInput
    isNot?: QuoteItemWhereInput
  }

  export type QuoteAcceptanceItemCountOrderByAggregateInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteAcceptanceItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
  }

  export type QuoteAcceptanceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteAcceptanceItemMinOrderByAggregateInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteAcceptanceItemSumOrderByAggregateInput = {
    id?: SortOrder
    quoteAcceptanceId?: SortOrder
    quoteItemId?: SortOrder
    acceptedPrice?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectItemListRelationFilter = {
    every?: ProjectItemWhereInput
    some?: ProjectItemWhereInput
    none?: ProjectItemWhereInput
  }

  export type ProjectItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
    isFullyPaid?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    canceledAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
    isFullyPaid?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    canceledAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
    isFullyPaid?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    canceledAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    pendingAmount?: SortOrder
    paidPercentage?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumProjectItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemStatus | EnumProjectItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemStatus[]
    notIn?: $Enums.ProjectItemStatus[]
    not?: NestedEnumProjectItemStatusFilter<$PrismaModel> | $Enums.ProjectItemStatus
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectItemOrderByRelevanceInput = {
    fields: ProjectItemOrderByRelevanceFieldEnum | ProjectItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectItemCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectItemAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type ProjectItemMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectItemMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectItemSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quoteItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumProjectItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemStatus | EnumProjectItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemStatus[]
    notIn?: $Enums.ProjectItemStatus[]
    not?: NestedEnumProjectItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectItemStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectItemStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type ProjectPaymentOrderByRelevanceInput = {
    fields: ProjectPaymentOrderByRelevanceFieldEnum | ProjectPaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    receiptFilePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
  }

  export type ProjectPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    receiptFilePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    receiptFilePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    registeredByUserId?: SortOrder
    amount?: SortOrder
    percentageEquivalent?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type QuoteNullableScalarRelationFilter = {
    is?: QuoteWhereInput | null
    isNot?: QuoteWhereInput | null
  }

  export type QuoteAcceptanceNullableScalarRelationFilter = {
    is?: QuoteAcceptanceWhereInput | null
    isNot?: QuoteAcceptanceWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DocumentOrderByRelevanceInput = {
    fields: DocumentOrderByRelevanceFieldEnum | DocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    invoiceNumber?: SortOrder
    notes?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    sizeInBytes?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    uploadedByUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectId?: SortOrder
    sizeInBytes?: SortOrder
    uploadedByUserId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    invoiceNumber?: SortOrder
    notes?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    sizeInBytes?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    uploadedByUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    invoiceNumber?: SortOrder
    notes?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    sizeInBytes?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    uploadedByUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    quoteId?: SortOrder
    quoteAcceptanceId?: SortOrder
    projectId?: SortOrder
    sizeInBytes?: SortOrder
    uploadedByUserId?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[]
    notIn?: $Enums.EntityType[]
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type StatusHistoryOrderByRelevanceInput = {
    fields: StatusHistoryOrderByRelevanceFieldEnum | StatusHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    changedByUserId?: SortOrder
    changedAt?: SortOrder
    notes?: SortOrder
  }

  export type StatusHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    changedByUserId?: SortOrder
  }

  export type StatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    changedByUserId?: SortOrder
    changedAt?: SortOrder
    notes?: SortOrder
  }

  export type StatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    changedByUserId?: SortOrder
    changedAt?: SortOrder
    notes?: SortOrder
  }

  export type StatusHistorySumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    changedByUserId?: SortOrder
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[]
    notIn?: $Enums.EntityType[]
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type QuoteCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<QuoteCreateWithoutCreatedByInput, QuoteUncheckedCreateWithoutCreatedByInput> | QuoteCreateWithoutCreatedByInput[] | QuoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutCreatedByInput | QuoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: QuoteCreateManyCreatedByInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type ProjectPaymentCreateNestedManyWithoutRegisteredByInput = {
    create?: XOR<ProjectPaymentCreateWithoutRegisteredByInput, ProjectPaymentUncheckedCreateWithoutRegisteredByInput> | ProjectPaymentCreateWithoutRegisteredByInput[] | ProjectPaymentUncheckedCreateWithoutRegisteredByInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutRegisteredByInput | ProjectPaymentCreateOrConnectWithoutRegisteredByInput[]
    createMany?: ProjectPaymentCreateManyRegisteredByInputEnvelope
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StatusHistoryCreateNestedManyWithoutChangedByInput = {
    create?: XOR<StatusHistoryCreateWithoutChangedByInput, StatusHistoryUncheckedCreateWithoutChangedByInput> | StatusHistoryCreateWithoutChangedByInput[] | StatusHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutChangedByInput | StatusHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: StatusHistoryCreateManyChangedByInputEnvelope
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<QuoteCreateWithoutCreatedByInput, QuoteUncheckedCreateWithoutCreatedByInput> | QuoteCreateWithoutCreatedByInput[] | QuoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutCreatedByInput | QuoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: QuoteCreateManyCreatedByInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type ProjectPaymentUncheckedCreateNestedManyWithoutRegisteredByInput = {
    create?: XOR<ProjectPaymentCreateWithoutRegisteredByInput, ProjectPaymentUncheckedCreateWithoutRegisteredByInput> | ProjectPaymentCreateWithoutRegisteredByInput[] | ProjectPaymentUncheckedCreateWithoutRegisteredByInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutRegisteredByInput | ProjectPaymentCreateOrConnectWithoutRegisteredByInput[]
    createMany?: ProjectPaymentCreateManyRegisteredByInputEnvelope
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StatusHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<StatusHistoryCreateWithoutChangedByInput, StatusHistoryUncheckedCreateWithoutChangedByInput> | StatusHistoryCreateWithoutChangedByInput[] | StatusHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutChangedByInput | StatusHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: StatusHistoryCreateManyChangedByInputEnvelope
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuoteUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<QuoteCreateWithoutCreatedByInput, QuoteUncheckedCreateWithoutCreatedByInput> | QuoteCreateWithoutCreatedByInput[] | QuoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutCreatedByInput | QuoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutCreatedByInput | QuoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: QuoteCreateManyCreatedByInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutCreatedByInput | QuoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutCreatedByInput | QuoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type ProjectPaymentUpdateManyWithoutRegisteredByNestedInput = {
    create?: XOR<ProjectPaymentCreateWithoutRegisteredByInput, ProjectPaymentUncheckedCreateWithoutRegisteredByInput> | ProjectPaymentCreateWithoutRegisteredByInput[] | ProjectPaymentUncheckedCreateWithoutRegisteredByInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutRegisteredByInput | ProjectPaymentCreateOrConnectWithoutRegisteredByInput[]
    upsert?: ProjectPaymentUpsertWithWhereUniqueWithoutRegisteredByInput | ProjectPaymentUpsertWithWhereUniqueWithoutRegisteredByInput[]
    createMany?: ProjectPaymentCreateManyRegisteredByInputEnvelope
    set?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    disconnect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    delete?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    update?: ProjectPaymentUpdateWithWhereUniqueWithoutRegisteredByInput | ProjectPaymentUpdateWithWhereUniqueWithoutRegisteredByInput[]
    updateMany?: ProjectPaymentUpdateManyWithWhereWithoutRegisteredByInput | ProjectPaymentUpdateManyWithWhereWithoutRegisteredByInput[]
    deleteMany?: ProjectPaymentScalarWhereInput | ProjectPaymentScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUploadedByInput | DocumentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUploadedByInput | DocumentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUploadedByInput | DocumentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type StatusHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<StatusHistoryCreateWithoutChangedByInput, StatusHistoryUncheckedCreateWithoutChangedByInput> | StatusHistoryCreateWithoutChangedByInput[] | StatusHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutChangedByInput | StatusHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: StatusHistoryUpsertWithWhereUniqueWithoutChangedByInput | StatusHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: StatusHistoryCreateManyChangedByInputEnvelope
    set?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    disconnect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    delete?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    update?: StatusHistoryUpdateWithWhereUniqueWithoutChangedByInput | StatusHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: StatusHistoryUpdateManyWithWhereWithoutChangedByInput | StatusHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuoteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<QuoteCreateWithoutCreatedByInput, QuoteUncheckedCreateWithoutCreatedByInput> | QuoteCreateWithoutCreatedByInput[] | QuoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutCreatedByInput | QuoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutCreatedByInput | QuoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: QuoteCreateManyCreatedByInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutCreatedByInput | QuoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutCreatedByInput | QuoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type ProjectPaymentUncheckedUpdateManyWithoutRegisteredByNestedInput = {
    create?: XOR<ProjectPaymentCreateWithoutRegisteredByInput, ProjectPaymentUncheckedCreateWithoutRegisteredByInput> | ProjectPaymentCreateWithoutRegisteredByInput[] | ProjectPaymentUncheckedCreateWithoutRegisteredByInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutRegisteredByInput | ProjectPaymentCreateOrConnectWithoutRegisteredByInput[]
    upsert?: ProjectPaymentUpsertWithWhereUniqueWithoutRegisteredByInput | ProjectPaymentUpsertWithWhereUniqueWithoutRegisteredByInput[]
    createMany?: ProjectPaymentCreateManyRegisteredByInputEnvelope
    set?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    disconnect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    delete?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    update?: ProjectPaymentUpdateWithWhereUniqueWithoutRegisteredByInput | ProjectPaymentUpdateWithWhereUniqueWithoutRegisteredByInput[]
    updateMany?: ProjectPaymentUpdateManyWithWhereWithoutRegisteredByInput | ProjectPaymentUpdateManyWithWhereWithoutRegisteredByInput[]
    deleteMany?: ProjectPaymentScalarWhereInput | ProjectPaymentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUploadedByInput | DocumentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUploadedByInput | DocumentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUploadedByInput | DocumentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type StatusHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<StatusHistoryCreateWithoutChangedByInput, StatusHistoryUncheckedCreateWithoutChangedByInput> | StatusHistoryCreateWithoutChangedByInput[] | StatusHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutChangedByInput | StatusHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: StatusHistoryUpsertWithWhereUniqueWithoutChangedByInput | StatusHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: StatusHistoryCreateManyChangedByInputEnvelope
    set?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    disconnect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    delete?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    update?: StatusHistoryUpdateWithWhereUniqueWithoutChangedByInput | StatusHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: StatusHistoryUpdateManyWithWhereWithoutChangedByInput | StatusHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
  }

  export type QuoteCreateNestedManyWithoutClientInput = {
    create?: XOR<QuoteCreateWithoutClientInput, QuoteUncheckedCreateWithoutClientInput> | QuoteCreateWithoutClientInput[] | QuoteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutClientInput | QuoteCreateOrConnectWithoutClientInput[]
    createMany?: QuoteCreateManyClientInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutClientInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuoteAcceptanceCreateNestedManyWithoutClientInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutClientInput, QuoteAcceptanceUncheckedCreateWithoutClientInput> | QuoteAcceptanceCreateWithoutClientInput[] | QuoteAcceptanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutClientInput | QuoteAcceptanceCreateOrConnectWithoutClientInput[]
    createMany?: QuoteAcceptanceCreateManyClientInputEnvelope
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<QuoteCreateWithoutClientInput, QuoteUncheckedCreateWithoutClientInput> | QuoteCreateWithoutClientInput[] | QuoteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutClientInput | QuoteCreateOrConnectWithoutClientInput[]
    createMany?: QuoteCreateManyClientInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuoteAcceptanceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutClientInput, QuoteAcceptanceUncheckedCreateWithoutClientInput> | QuoteAcceptanceCreateWithoutClientInput[] | QuoteAcceptanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutClientInput | QuoteAcceptanceCreateOrConnectWithoutClientInput[]
    createMany?: QuoteAcceptanceCreateManyClientInputEnvelope
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuoteUpdateManyWithoutClientNestedInput = {
    create?: XOR<QuoteCreateWithoutClientInput, QuoteUncheckedCreateWithoutClientInput> | QuoteCreateWithoutClientInput[] | QuoteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutClientInput | QuoteCreateOrConnectWithoutClientInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutClientInput | QuoteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QuoteCreateManyClientInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutClientInput | QuoteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutClientInput | QuoteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutClientNestedInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutClientInput | DocumentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutClientInput | DocumentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutClientInput | DocumentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuoteAcceptanceUpdateManyWithoutClientNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutClientInput, QuoteAcceptanceUncheckedCreateWithoutClientInput> | QuoteAcceptanceCreateWithoutClientInput[] | QuoteAcceptanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutClientInput | QuoteAcceptanceCreateOrConnectWithoutClientInput[]
    upsert?: QuoteAcceptanceUpsertWithWhereUniqueWithoutClientInput | QuoteAcceptanceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QuoteAcceptanceCreateManyClientInputEnvelope
    set?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    disconnect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    delete?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    update?: QuoteAcceptanceUpdateWithWhereUniqueWithoutClientInput | QuoteAcceptanceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QuoteAcceptanceUpdateManyWithWhereWithoutClientInput | QuoteAcceptanceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QuoteAcceptanceScalarWhereInput | QuoteAcceptanceScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<QuoteCreateWithoutClientInput, QuoteUncheckedCreateWithoutClientInput> | QuoteCreateWithoutClientInput[] | QuoteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutClientInput | QuoteCreateOrConnectWithoutClientInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutClientInput | QuoteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QuoteCreateManyClientInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutClientInput | QuoteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutClientInput | QuoteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutClientInput | DocumentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutClientInput | DocumentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutClientInput | DocumentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuoteAcceptanceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutClientInput, QuoteAcceptanceUncheckedCreateWithoutClientInput> | QuoteAcceptanceCreateWithoutClientInput[] | QuoteAcceptanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutClientInput | QuoteAcceptanceCreateOrConnectWithoutClientInput[]
    upsert?: QuoteAcceptanceUpsertWithWhereUniqueWithoutClientInput | QuoteAcceptanceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QuoteAcceptanceCreateManyClientInputEnvelope
    set?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    disconnect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    delete?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    update?: QuoteAcceptanceUpdateWithWhereUniqueWithoutClientInput | QuoteAcceptanceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QuoteAcceptanceUpdateManyWithWhereWithoutClientInput | QuoteAcceptanceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QuoteAcceptanceScalarWhereInput | QuoteAcceptanceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutQuotesInput = {
    create?: XOR<ClientCreateWithoutQuotesInput, ClientUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutQuotesInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuotesCreatedInput = {
    create?: XOR<UserCreateWithoutQuotesCreatedInput, UserUncheckedCreateWithoutQuotesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type QuoteItemCreateNestedManyWithoutQuoteInput = {
    create?: XOR<QuoteItemCreateWithoutQuoteInput, QuoteItemUncheckedCreateWithoutQuoteInput> | QuoteItemCreateWithoutQuoteInput[] | QuoteItemUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteItemCreateOrConnectWithoutQuoteInput | QuoteItemCreateOrConnectWithoutQuoteInput[]
    createMany?: QuoteItemCreateManyQuoteInputEnvelope
    connect?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
  }

  export type QuoteAcceptanceCreateNestedManyWithoutQuoteInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutQuoteInput, QuoteAcceptanceUncheckedCreateWithoutQuoteInput> | QuoteAcceptanceCreateWithoutQuoteInput[] | QuoteAcceptanceUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutQuoteInput | QuoteAcceptanceCreateOrConnectWithoutQuoteInput[]
    createMany?: QuoteAcceptanceCreateManyQuoteInputEnvelope
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutQuoteInput = {
    create?: XOR<ProjectCreateWithoutQuoteInput, ProjectUncheckedCreateWithoutQuoteInput> | ProjectCreateWithoutQuoteInput[] | ProjectUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutQuoteInput | ProjectCreateOrConnectWithoutQuoteInput[]
    createMany?: ProjectCreateManyQuoteInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutQuoteInput = {
    create?: XOR<DocumentCreateWithoutQuoteInput, DocumentUncheckedCreateWithoutQuoteInput> | DocumentCreateWithoutQuoteInput[] | DocumentUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutQuoteInput | DocumentCreateOrConnectWithoutQuoteInput[]
    createMany?: DocumentCreateManyQuoteInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuoteItemUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: XOR<QuoteItemCreateWithoutQuoteInput, QuoteItemUncheckedCreateWithoutQuoteInput> | QuoteItemCreateWithoutQuoteInput[] | QuoteItemUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteItemCreateOrConnectWithoutQuoteInput | QuoteItemCreateOrConnectWithoutQuoteInput[]
    createMany?: QuoteItemCreateManyQuoteInputEnvelope
    connect?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
  }

  export type QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutQuoteInput, QuoteAcceptanceUncheckedCreateWithoutQuoteInput> | QuoteAcceptanceCreateWithoutQuoteInput[] | QuoteAcceptanceUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutQuoteInput | QuoteAcceptanceCreateOrConnectWithoutQuoteInput[]
    createMany?: QuoteAcceptanceCreateManyQuoteInputEnvelope
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: XOR<ProjectCreateWithoutQuoteInput, ProjectUncheckedCreateWithoutQuoteInput> | ProjectCreateWithoutQuoteInput[] | ProjectUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutQuoteInput | ProjectCreateOrConnectWithoutQuoteInput[]
    createMany?: ProjectCreateManyQuoteInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: XOR<DocumentCreateWithoutQuoteInput, DocumentUncheckedCreateWithoutQuoteInput> | DocumentCreateWithoutQuoteInput[] | DocumentUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutQuoteInput | DocumentCreateOrConnectWithoutQuoteInput[]
    createMany?: DocumentCreateManyQuoteInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumQuoteStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuoteStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<ClientCreateWithoutQuotesInput, ClientUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutQuotesInput
    upsert?: ClientUpsertWithoutQuotesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutQuotesInput, ClientUpdateWithoutQuotesInput>, ClientUncheckedUpdateWithoutQuotesInput>
  }

  export type UserUpdateOneRequiredWithoutQuotesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutQuotesCreatedInput, UserUncheckedCreateWithoutQuotesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotesCreatedInput
    upsert?: UserUpsertWithoutQuotesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuotesCreatedInput, UserUpdateWithoutQuotesCreatedInput>, UserUncheckedUpdateWithoutQuotesCreatedInput>
  }

  export type QuoteItemUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<QuoteItemCreateWithoutQuoteInput, QuoteItemUncheckedCreateWithoutQuoteInput> | QuoteItemCreateWithoutQuoteInput[] | QuoteItemUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteItemCreateOrConnectWithoutQuoteInput | QuoteItemCreateOrConnectWithoutQuoteInput[]
    upsert?: QuoteItemUpsertWithWhereUniqueWithoutQuoteInput | QuoteItemUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: QuoteItemCreateManyQuoteInputEnvelope
    set?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    disconnect?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    delete?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    connect?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    update?: QuoteItemUpdateWithWhereUniqueWithoutQuoteInput | QuoteItemUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: QuoteItemUpdateManyWithWhereWithoutQuoteInput | QuoteItemUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: QuoteItemScalarWhereInput | QuoteItemScalarWhereInput[]
  }

  export type QuoteAcceptanceUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutQuoteInput, QuoteAcceptanceUncheckedCreateWithoutQuoteInput> | QuoteAcceptanceCreateWithoutQuoteInput[] | QuoteAcceptanceUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutQuoteInput | QuoteAcceptanceCreateOrConnectWithoutQuoteInput[]
    upsert?: QuoteAcceptanceUpsertWithWhereUniqueWithoutQuoteInput | QuoteAcceptanceUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: QuoteAcceptanceCreateManyQuoteInputEnvelope
    set?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    disconnect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    delete?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    update?: QuoteAcceptanceUpdateWithWhereUniqueWithoutQuoteInput | QuoteAcceptanceUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: QuoteAcceptanceUpdateManyWithWhereWithoutQuoteInput | QuoteAcceptanceUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: QuoteAcceptanceScalarWhereInput | QuoteAcceptanceScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<ProjectCreateWithoutQuoteInput, ProjectUncheckedCreateWithoutQuoteInput> | ProjectCreateWithoutQuoteInput[] | ProjectUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutQuoteInput | ProjectCreateOrConnectWithoutQuoteInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutQuoteInput | ProjectUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: ProjectCreateManyQuoteInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutQuoteInput | ProjectUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutQuoteInput | ProjectUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<DocumentCreateWithoutQuoteInput, DocumentUncheckedCreateWithoutQuoteInput> | DocumentCreateWithoutQuoteInput[] | DocumentUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutQuoteInput | DocumentCreateOrConnectWithoutQuoteInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutQuoteInput | DocumentUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: DocumentCreateManyQuoteInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutQuoteInput | DocumentUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutQuoteInput | DocumentUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<QuoteItemCreateWithoutQuoteInput, QuoteItemUncheckedCreateWithoutQuoteInput> | QuoteItemCreateWithoutQuoteInput[] | QuoteItemUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteItemCreateOrConnectWithoutQuoteInput | QuoteItemCreateOrConnectWithoutQuoteInput[]
    upsert?: QuoteItemUpsertWithWhereUniqueWithoutQuoteInput | QuoteItemUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: QuoteItemCreateManyQuoteInputEnvelope
    set?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    disconnect?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    delete?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    connect?: QuoteItemWhereUniqueInput | QuoteItemWhereUniqueInput[]
    update?: QuoteItemUpdateWithWhereUniqueWithoutQuoteInput | QuoteItemUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: QuoteItemUpdateManyWithWhereWithoutQuoteInput | QuoteItemUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: QuoteItemScalarWhereInput | QuoteItemScalarWhereInput[]
  }

  export type QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutQuoteInput, QuoteAcceptanceUncheckedCreateWithoutQuoteInput> | QuoteAcceptanceCreateWithoutQuoteInput[] | QuoteAcceptanceUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutQuoteInput | QuoteAcceptanceCreateOrConnectWithoutQuoteInput[]
    upsert?: QuoteAcceptanceUpsertWithWhereUniqueWithoutQuoteInput | QuoteAcceptanceUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: QuoteAcceptanceCreateManyQuoteInputEnvelope
    set?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    disconnect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    delete?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    connect?: QuoteAcceptanceWhereUniqueInput | QuoteAcceptanceWhereUniqueInput[]
    update?: QuoteAcceptanceUpdateWithWhereUniqueWithoutQuoteInput | QuoteAcceptanceUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: QuoteAcceptanceUpdateManyWithWhereWithoutQuoteInput | QuoteAcceptanceUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: QuoteAcceptanceScalarWhereInput | QuoteAcceptanceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<ProjectCreateWithoutQuoteInput, ProjectUncheckedCreateWithoutQuoteInput> | ProjectCreateWithoutQuoteInput[] | ProjectUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutQuoteInput | ProjectCreateOrConnectWithoutQuoteInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutQuoteInput | ProjectUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: ProjectCreateManyQuoteInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutQuoteInput | ProjectUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutQuoteInput | ProjectUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<DocumentCreateWithoutQuoteInput, DocumentUncheckedCreateWithoutQuoteInput> | DocumentCreateWithoutQuoteInput[] | DocumentUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutQuoteInput | DocumentCreateOrConnectWithoutQuoteInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutQuoteInput | DocumentUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: DocumentCreateManyQuoteInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutQuoteInput | DocumentUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutQuoteInput | DocumentUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuoteCreateNestedOneWithoutItemsInput = {
    create?: XOR<QuoteCreateWithoutItemsInput, QuoteUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutItemsInput
    connect?: QuoteWhereUniqueInput
  }

  export type QuoteAcceptanceItemCreateNestedManyWithoutQuoteItemInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput> | QuoteAcceptanceItemCreateWithoutQuoteItemInput[] | QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput | QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput[]
    createMany?: QuoteAcceptanceItemCreateManyQuoteItemInputEnvelope
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
  }

  export type QuoteAcceptanceItemUncheckedCreateNestedManyWithoutQuoteItemInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput> | QuoteAcceptanceItemCreateWithoutQuoteItemInput[] | QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput | QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput[]
    createMany?: QuoteAcceptanceItemCreateManyQuoteItemInputEnvelope
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
  }

  export type EnumQuoteItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuoteItemStatus
  }

  export type QuoteUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<QuoteCreateWithoutItemsInput, QuoteUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutItemsInput
    upsert?: QuoteUpsertWithoutItemsInput
    connect?: QuoteWhereUniqueInput
    update?: XOR<XOR<QuoteUpdateToOneWithWhereWithoutItemsInput, QuoteUpdateWithoutItemsInput>, QuoteUncheckedUpdateWithoutItemsInput>
  }

  export type QuoteAcceptanceItemUpdateManyWithoutQuoteItemNestedInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput> | QuoteAcceptanceItemCreateWithoutQuoteItemInput[] | QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput | QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput[]
    upsert?: QuoteAcceptanceItemUpsertWithWhereUniqueWithoutQuoteItemInput | QuoteAcceptanceItemUpsertWithWhereUniqueWithoutQuoteItemInput[]
    createMany?: QuoteAcceptanceItemCreateManyQuoteItemInputEnvelope
    set?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    disconnect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    delete?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    update?: QuoteAcceptanceItemUpdateWithWhereUniqueWithoutQuoteItemInput | QuoteAcceptanceItemUpdateWithWhereUniqueWithoutQuoteItemInput[]
    updateMany?: QuoteAcceptanceItemUpdateManyWithWhereWithoutQuoteItemInput | QuoteAcceptanceItemUpdateManyWithWhereWithoutQuoteItemInput[]
    deleteMany?: QuoteAcceptanceItemScalarWhereInput | QuoteAcceptanceItemScalarWhereInput[]
  }

  export type QuoteAcceptanceItemUncheckedUpdateManyWithoutQuoteItemNestedInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput> | QuoteAcceptanceItemCreateWithoutQuoteItemInput[] | QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput | QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput[]
    upsert?: QuoteAcceptanceItemUpsertWithWhereUniqueWithoutQuoteItemInput | QuoteAcceptanceItemUpsertWithWhereUniqueWithoutQuoteItemInput[]
    createMany?: QuoteAcceptanceItemCreateManyQuoteItemInputEnvelope
    set?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    disconnect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    delete?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    update?: QuoteAcceptanceItemUpdateWithWhereUniqueWithoutQuoteItemInput | QuoteAcceptanceItemUpdateWithWhereUniqueWithoutQuoteItemInput[]
    updateMany?: QuoteAcceptanceItemUpdateManyWithWhereWithoutQuoteItemInput | QuoteAcceptanceItemUpdateManyWithWhereWithoutQuoteItemInput[]
    deleteMany?: QuoteAcceptanceItemScalarWhereInput | QuoteAcceptanceItemScalarWhereInput[]
  }

  export type QuoteCreateNestedOneWithoutAcceptancesInput = {
    create?: XOR<QuoteCreateWithoutAcceptancesInput, QuoteUncheckedCreateWithoutAcceptancesInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutAcceptancesInput
    connect?: QuoteWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutAcceptancesInput = {
    create?: XOR<ClientCreateWithoutAcceptancesInput, ClientUncheckedCreateWithoutAcceptancesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAcceptancesInput
    connect?: ClientWhereUniqueInput
  }

  export type QuoteAcceptanceItemCreateNestedManyWithoutAcceptanceInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput> | QuoteAcceptanceItemCreateWithoutAcceptanceInput[] | QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput | QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput[]
    createMany?: QuoteAcceptanceItemCreateManyAcceptanceInputEnvelope
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutAcceptanceInput = {
    create?: XOR<ProjectCreateWithoutAcceptanceInput, ProjectUncheckedCreateWithoutAcceptanceInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAcceptanceInput
    connect?: ProjectWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutAcceptanceInput = {
    create?: XOR<DocumentCreateWithoutAcceptanceInput, DocumentUncheckedCreateWithoutAcceptanceInput> | DocumentCreateWithoutAcceptanceInput[] | DocumentUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAcceptanceInput | DocumentCreateOrConnectWithoutAcceptanceInput[]
    createMany?: DocumentCreateManyAcceptanceInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type QuoteAcceptanceItemUncheckedCreateNestedManyWithoutAcceptanceInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput> | QuoteAcceptanceItemCreateWithoutAcceptanceInput[] | QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput | QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput[]
    createMany?: QuoteAcceptanceItemCreateManyAcceptanceInputEnvelope
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedOneWithoutAcceptanceInput = {
    create?: XOR<ProjectCreateWithoutAcceptanceInput, ProjectUncheckedCreateWithoutAcceptanceInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAcceptanceInput
    connect?: ProjectWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutAcceptanceInput = {
    create?: XOR<DocumentCreateWithoutAcceptanceInput, DocumentUncheckedCreateWithoutAcceptanceInput> | DocumentCreateWithoutAcceptanceInput[] | DocumentUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAcceptanceInput | DocumentCreateOrConnectWithoutAcceptanceInput[]
    createMany?: DocumentCreateManyAcceptanceInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumAcceptanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AcceptanceType
  }

  export type QuoteUpdateOneRequiredWithoutAcceptancesNestedInput = {
    create?: XOR<QuoteCreateWithoutAcceptancesInput, QuoteUncheckedCreateWithoutAcceptancesInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutAcceptancesInput
    upsert?: QuoteUpsertWithoutAcceptancesInput
    connect?: QuoteWhereUniqueInput
    update?: XOR<XOR<QuoteUpdateToOneWithWhereWithoutAcceptancesInput, QuoteUpdateWithoutAcceptancesInput>, QuoteUncheckedUpdateWithoutAcceptancesInput>
  }

  export type ClientUpdateOneRequiredWithoutAcceptancesNestedInput = {
    create?: XOR<ClientCreateWithoutAcceptancesInput, ClientUncheckedCreateWithoutAcceptancesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAcceptancesInput
    upsert?: ClientUpsertWithoutAcceptancesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAcceptancesInput, ClientUpdateWithoutAcceptancesInput>, ClientUncheckedUpdateWithoutAcceptancesInput>
  }

  export type QuoteAcceptanceItemUpdateManyWithoutAcceptanceNestedInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput> | QuoteAcceptanceItemCreateWithoutAcceptanceInput[] | QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput | QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput[]
    upsert?: QuoteAcceptanceItemUpsertWithWhereUniqueWithoutAcceptanceInput | QuoteAcceptanceItemUpsertWithWhereUniqueWithoutAcceptanceInput[]
    createMany?: QuoteAcceptanceItemCreateManyAcceptanceInputEnvelope
    set?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    disconnect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    delete?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    update?: QuoteAcceptanceItemUpdateWithWhereUniqueWithoutAcceptanceInput | QuoteAcceptanceItemUpdateWithWhereUniqueWithoutAcceptanceInput[]
    updateMany?: QuoteAcceptanceItemUpdateManyWithWhereWithoutAcceptanceInput | QuoteAcceptanceItemUpdateManyWithWhereWithoutAcceptanceInput[]
    deleteMany?: QuoteAcceptanceItemScalarWhereInput | QuoteAcceptanceItemScalarWhereInput[]
  }

  export type ProjectUpdateOneWithoutAcceptanceNestedInput = {
    create?: XOR<ProjectCreateWithoutAcceptanceInput, ProjectUncheckedCreateWithoutAcceptanceInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAcceptanceInput
    upsert?: ProjectUpsertWithoutAcceptanceInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAcceptanceInput, ProjectUpdateWithoutAcceptanceInput>, ProjectUncheckedUpdateWithoutAcceptanceInput>
  }

  export type DocumentUpdateManyWithoutAcceptanceNestedInput = {
    create?: XOR<DocumentCreateWithoutAcceptanceInput, DocumentUncheckedCreateWithoutAcceptanceInput> | DocumentCreateWithoutAcceptanceInput[] | DocumentUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAcceptanceInput | DocumentCreateOrConnectWithoutAcceptanceInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAcceptanceInput | DocumentUpsertWithWhereUniqueWithoutAcceptanceInput[]
    createMany?: DocumentCreateManyAcceptanceInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAcceptanceInput | DocumentUpdateWithWhereUniqueWithoutAcceptanceInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAcceptanceInput | DocumentUpdateManyWithWhereWithoutAcceptanceInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceNestedInput = {
    create?: XOR<QuoteAcceptanceItemCreateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput> | QuoteAcceptanceItemCreateWithoutAcceptanceInput[] | QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput | QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput[]
    upsert?: QuoteAcceptanceItemUpsertWithWhereUniqueWithoutAcceptanceInput | QuoteAcceptanceItemUpsertWithWhereUniqueWithoutAcceptanceInput[]
    createMany?: QuoteAcceptanceItemCreateManyAcceptanceInputEnvelope
    set?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    disconnect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    delete?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    connect?: QuoteAcceptanceItemWhereUniqueInput | QuoteAcceptanceItemWhereUniqueInput[]
    update?: QuoteAcceptanceItemUpdateWithWhereUniqueWithoutAcceptanceInput | QuoteAcceptanceItemUpdateWithWhereUniqueWithoutAcceptanceInput[]
    updateMany?: QuoteAcceptanceItemUpdateManyWithWhereWithoutAcceptanceInput | QuoteAcceptanceItemUpdateManyWithWhereWithoutAcceptanceInput[]
    deleteMany?: QuoteAcceptanceItemScalarWhereInput | QuoteAcceptanceItemScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateOneWithoutAcceptanceNestedInput = {
    create?: XOR<ProjectCreateWithoutAcceptanceInput, ProjectUncheckedCreateWithoutAcceptanceInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAcceptanceInput
    upsert?: ProjectUpsertWithoutAcceptanceInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAcceptanceInput, ProjectUpdateWithoutAcceptanceInput>, ProjectUncheckedUpdateWithoutAcceptanceInput>
  }

  export type DocumentUncheckedUpdateManyWithoutAcceptanceNestedInput = {
    create?: XOR<DocumentCreateWithoutAcceptanceInput, DocumentUncheckedCreateWithoutAcceptanceInput> | DocumentCreateWithoutAcceptanceInput[] | DocumentUncheckedCreateWithoutAcceptanceInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAcceptanceInput | DocumentCreateOrConnectWithoutAcceptanceInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAcceptanceInput | DocumentUpsertWithWhereUniqueWithoutAcceptanceInput[]
    createMany?: DocumentCreateManyAcceptanceInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAcceptanceInput | DocumentUpdateWithWhereUniqueWithoutAcceptanceInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAcceptanceInput | DocumentUpdateManyWithWhereWithoutAcceptanceInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type QuoteAcceptanceCreateNestedOneWithoutItemsInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutItemsInput, QuoteAcceptanceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutItemsInput
    connect?: QuoteAcceptanceWhereUniqueInput
  }

  export type QuoteItemCreateNestedOneWithoutAcceptanceItemsInput = {
    create?: XOR<QuoteItemCreateWithoutAcceptanceItemsInput, QuoteItemUncheckedCreateWithoutAcceptanceItemsInput>
    connectOrCreate?: QuoteItemCreateOrConnectWithoutAcceptanceItemsInput
    connect?: QuoteItemWhereUniqueInput
  }

  export type QuoteAcceptanceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutItemsInput, QuoteAcceptanceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutItemsInput
    upsert?: QuoteAcceptanceUpsertWithoutItemsInput
    connect?: QuoteAcceptanceWhereUniqueInput
    update?: XOR<XOR<QuoteAcceptanceUpdateToOneWithWhereWithoutItemsInput, QuoteAcceptanceUpdateWithoutItemsInput>, QuoteAcceptanceUncheckedUpdateWithoutItemsInput>
  }

  export type QuoteItemUpdateOneRequiredWithoutAcceptanceItemsNestedInput = {
    create?: XOR<QuoteItemCreateWithoutAcceptanceItemsInput, QuoteItemUncheckedCreateWithoutAcceptanceItemsInput>
    connectOrCreate?: QuoteItemCreateOrConnectWithoutAcceptanceItemsInput
    upsert?: QuoteItemUpsertWithoutAcceptanceItemsInput
    connect?: QuoteItemWhereUniqueInput
    update?: XOR<XOR<QuoteItemUpdateToOneWithWhereWithoutAcceptanceItemsInput, QuoteItemUpdateWithoutAcceptanceItemsInput>, QuoteItemUncheckedUpdateWithoutAcceptanceItemsInput>
  }

  export type ClientCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    connect?: ClientWhereUniqueInput
  }

  export type QuoteCreateNestedOneWithoutProjectsInput = {
    create?: XOR<QuoteCreateWithoutProjectsInput, QuoteUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutProjectsInput
    connect?: QuoteWhereUniqueInput
  }

  export type QuoteAcceptanceCreateNestedOneWithoutProjectInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutProjectInput, QuoteAcceptanceUncheckedCreateWithoutProjectInput>
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutProjectInput
    connect?: QuoteAcceptanceWhereUniqueInput
  }

  export type ProjectItemCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
  }

  export type ProjectPaymentCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPaymentCreateWithoutProjectInput, ProjectPaymentUncheckedCreateWithoutProjectInput> | ProjectPaymentCreateWithoutProjectInput[] | ProjectPaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutProjectInput | ProjectPaymentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPaymentCreateManyProjectInputEnvelope
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutProjectInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ProjectItemUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
  }

  export type ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPaymentCreateWithoutProjectInput, ProjectPaymentUncheckedCreateWithoutProjectInput> | ProjectPaymentCreateWithoutProjectInput[] | ProjectPaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutProjectInput | ProjectPaymentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPaymentCreateManyProjectInputEnvelope
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type ClientUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    upsert?: ClientUpsertWithoutProjectsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProjectsInput, ClientUpdateWithoutProjectsInput>, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type QuoteUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<QuoteCreateWithoutProjectsInput, QuoteUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutProjectsInput
    upsert?: QuoteUpsertWithoutProjectsInput
    connect?: QuoteWhereUniqueInput
    update?: XOR<XOR<QuoteUpdateToOneWithWhereWithoutProjectsInput, QuoteUpdateWithoutProjectsInput>, QuoteUncheckedUpdateWithoutProjectsInput>
  }

  export type QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutProjectInput, QuoteAcceptanceUncheckedCreateWithoutProjectInput>
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutProjectInput
    upsert?: QuoteAcceptanceUpsertWithoutProjectInput
    connect?: QuoteAcceptanceWhereUniqueInput
    update?: XOR<XOR<QuoteAcceptanceUpdateToOneWithWhereWithoutProjectInput, QuoteAcceptanceUpdateWithoutProjectInput>, QuoteAcceptanceUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectItemUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectItemUpsertWithWhereUniqueWithoutProjectInput | ProjectItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    set?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    disconnect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    delete?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    update?: ProjectItemUpdateWithWhereUniqueWithoutProjectInput | ProjectItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectItemUpdateManyWithWhereWithoutProjectInput | ProjectItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
  }

  export type ProjectPaymentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPaymentCreateWithoutProjectInput, ProjectPaymentUncheckedCreateWithoutProjectInput> | ProjectPaymentCreateWithoutProjectInput[] | ProjectPaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutProjectInput | ProjectPaymentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPaymentUpsertWithWhereUniqueWithoutProjectInput | ProjectPaymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPaymentCreateManyProjectInputEnvelope
    set?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    disconnect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    delete?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    update?: ProjectPaymentUpdateWithWhereUniqueWithoutProjectInput | ProjectPaymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPaymentUpdateManyWithWhereWithoutProjectInput | ProjectPaymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPaymentScalarWhereInput | ProjectPaymentScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutProjectInput | DocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutProjectInput | DocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutProjectInput | DocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ProjectItemUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectItemUpsertWithWhereUniqueWithoutProjectInput | ProjectItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    set?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    disconnect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    delete?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    update?: ProjectItemUpdateWithWhereUniqueWithoutProjectInput | ProjectItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectItemUpdateManyWithWhereWithoutProjectInput | ProjectItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
  }

  export type ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPaymentCreateWithoutProjectInput, ProjectPaymentUncheckedCreateWithoutProjectInput> | ProjectPaymentCreateWithoutProjectInput[] | ProjectPaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPaymentCreateOrConnectWithoutProjectInput | ProjectPaymentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPaymentUpsertWithWhereUniqueWithoutProjectInput | ProjectPaymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPaymentCreateManyProjectInputEnvelope
    set?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    disconnect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    delete?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    connect?: ProjectPaymentWhereUniqueInput | ProjectPaymentWhereUniqueInput[]
    update?: ProjectPaymentUpdateWithWhereUniqueWithoutProjectInput | ProjectPaymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPaymentUpdateManyWithWhereWithoutProjectInput | ProjectPaymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPaymentScalarWhereInput | ProjectPaymentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutProjectInput | DocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutProjectInput | DocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutProjectInput | DocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProjectItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectItemStatus
  }

  export type ProjectUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    upsert?: ProjectUpsertWithoutItemsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutItemsInput, ProjectUpdateWithoutItemsInput>, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type ProjectCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsRegisteredInput = {
    create?: XOR<UserCreateWithoutPaymentsRegisteredInput, UserUncheckedCreateWithoutPaymentsRegisteredInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsRegisteredInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type ProjectUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentsInput
    upsert?: ProjectUpsertWithoutPaymentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPaymentsInput, ProjectUpdateWithoutPaymentsInput>, ProjectUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsRegisteredNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsRegisteredInput, UserUncheckedCreateWithoutPaymentsRegisteredInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsRegisteredInput
    upsert?: UserUpsertWithoutPaymentsRegisteredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsRegisteredInput, UserUpdateWithoutPaymentsRegisteredInput>, UserUncheckedUpdateWithoutPaymentsRegisteredInput>
  }

  export type ClientCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
  }

  export type QuoteCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<QuoteCreateWithoutDocumentsInput, QuoteUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutDocumentsInput
    connect?: QuoteWhereUniqueInput
  }

  export type QuoteAcceptanceCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutDocumentsInput, QuoteAcceptanceUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutDocumentsInput
    connect?: QuoteAcceptanceWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDocumentsUploadedInput = {
    create?: XOR<UserCreateWithoutDocumentsUploadedInput, UserUncheckedCreateWithoutDocumentsUploadedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsUploadedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type ClientUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    upsert?: ClientUpsertWithoutDocumentsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDocumentsInput, ClientUpdateWithoutDocumentsInput>, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type QuoteUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<QuoteCreateWithoutDocumentsInput, QuoteUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutDocumentsInput
    upsert?: QuoteUpsertWithoutDocumentsInput
    disconnect?: QuoteWhereInput | boolean
    delete?: QuoteWhereInput | boolean
    connect?: QuoteWhereUniqueInput
    update?: XOR<XOR<QuoteUpdateToOneWithWhereWithoutDocumentsInput, QuoteUpdateWithoutDocumentsInput>, QuoteUncheckedUpdateWithoutDocumentsInput>
  }

  export type QuoteAcceptanceUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<QuoteAcceptanceCreateWithoutDocumentsInput, QuoteAcceptanceUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: QuoteAcceptanceCreateOrConnectWithoutDocumentsInput
    upsert?: QuoteAcceptanceUpsertWithoutDocumentsInput
    disconnect?: QuoteAcceptanceWhereInput | boolean
    delete?: QuoteAcceptanceWhereInput | boolean
    connect?: QuoteAcceptanceWhereUniqueInput
    update?: XOR<XOR<QuoteAcceptanceUpdateToOneWithWhereWithoutDocumentsInput, QuoteAcceptanceUpdateWithoutDocumentsInput>, QuoteAcceptanceUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProjectUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput
    upsert?: ProjectUpsertWithoutDocumentsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDocumentsInput, ProjectUpdateWithoutDocumentsInput>, ProjectUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateOneWithoutDocumentsUploadedNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsUploadedInput, UserUncheckedCreateWithoutDocumentsUploadedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsUploadedInput
    upsert?: UserUpsertWithoutDocumentsUploadedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsUploadedInput, UserUpdateWithoutDocumentsUploadedInput>, UserUncheckedUpdateWithoutDocumentsUploadedInput>
  }

  export type UserCreateNestedOneWithoutStatusChangesInput = {
    create?: XOR<UserCreateWithoutStatusChangesInput, UserUncheckedCreateWithoutStatusChangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusChangesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type UserUpdateOneWithoutStatusChangesNestedInput = {
    create?: XOR<UserCreateWithoutStatusChangesInput, UserUncheckedCreateWithoutStatusChangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusChangesInput
    upsert?: UserUpsertWithoutStatusChangesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatusChangesInput, UserUpdateWithoutStatusChangesInput>, UserUncheckedUpdateWithoutStatusChangesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumQuoteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusFilter<$PrismaModel> | $Enums.QuoteStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumQuoteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteStatus | EnumQuoteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteStatus[]
    notIn?: $Enums.QuoteStatus[]
    not?: NestedEnumQuoteStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuoteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuoteStatusFilter<$PrismaModel>
    _max?: NestedEnumQuoteStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuoteItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteItemStatus | EnumQuoteItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteItemStatus[]
    notIn?: $Enums.QuoteItemStatus[]
    not?: NestedEnumQuoteItemStatusFilter<$PrismaModel> | $Enums.QuoteItemStatus
  }

  export type NestedEnumQuoteItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuoteItemStatus | EnumQuoteItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuoteItemStatus[]
    notIn?: $Enums.QuoteItemStatus[]
    not?: NestedEnumQuoteItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuoteItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuoteItemStatusFilter<$PrismaModel>
    _max?: NestedEnumQuoteItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumAcceptanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AcceptanceType | EnumAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcceptanceType[]
    notIn?: $Enums.AcceptanceType[]
    not?: NestedEnumAcceptanceTypeFilter<$PrismaModel> | $Enums.AcceptanceType
  }

  export type NestedEnumAcceptanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcceptanceType | EnumAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcceptanceType[]
    notIn?: $Enums.AcceptanceType[]
    not?: NestedEnumAcceptanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AcceptanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcceptanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAcceptanceTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemStatus | EnumProjectItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemStatus[]
    notIn?: $Enums.ProjectItemStatus[]
    not?: NestedEnumProjectItemStatusFilter<$PrismaModel> | $Enums.ProjectItemStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemStatus | EnumProjectItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemStatus[]
    notIn?: $Enums.ProjectItemStatus[]
    not?: NestedEnumProjectItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectItemStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[]
    notIn?: $Enums.EntityType[]
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[]
    notIn?: $Enums.EntityType[]
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type QuoteCreateWithoutCreatedByInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutQuotesInput
    items?: QuoteItemCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutQuoteInput
    projects?: ProjectCreateNestedManyWithoutQuoteInput
    documents?: DocumentCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutCreatedByInput = {
    id?: number
    clientId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteItemUncheckedCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput
    projects?: ProjectUncheckedCreateNestedManyWithoutQuoteInput
    documents?: DocumentUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutCreatedByInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutCreatedByInput, QuoteUncheckedCreateWithoutCreatedByInput>
  }

  export type QuoteCreateManyCreatedByInputEnvelope = {
    data: QuoteCreateManyCreatedByInput | QuoteCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectPaymentCreateWithoutRegisteredByInput = {
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPaymentsInput
  }

  export type ProjectPaymentUncheckedCreateWithoutRegisteredByInput = {
    id?: number
    projectId: number
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPaymentCreateOrConnectWithoutRegisteredByInput = {
    where: ProjectPaymentWhereUniqueInput
    create: XOR<ProjectPaymentCreateWithoutRegisteredByInput, ProjectPaymentUncheckedCreateWithoutRegisteredByInput>
  }

  export type ProjectPaymentCreateManyRegisteredByInputEnvelope = {
    data: ProjectPaymentCreateManyRegisteredByInput | ProjectPaymentCreateManyRegisteredByInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutUploadedByInput = {
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
    client?: ClientCreateNestedOneWithoutDocumentsInput
    quote?: QuoteCreateNestedOneWithoutDocumentsInput
    acceptance?: QuoteAcceptanceCreateNestedOneWithoutDocumentsInput
    project?: ProjectCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutUploadedByInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutUploadedByInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput>
  }

  export type DocumentCreateManyUploadedByInputEnvelope = {
    data: DocumentCreateManyUploadedByInput | DocumentCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type StatusHistoryCreateWithoutChangedByInput = {
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedAt?: Date | string
    notes?: string | null
  }

  export type StatusHistoryUncheckedCreateWithoutChangedByInput = {
    id?: number
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedAt?: Date | string
    notes?: string | null
  }

  export type StatusHistoryCreateOrConnectWithoutChangedByInput = {
    where: StatusHistoryWhereUniqueInput
    create: XOR<StatusHistoryCreateWithoutChangedByInput, StatusHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type StatusHistoryCreateManyChangedByInputEnvelope = {
    data: StatusHistoryCreateManyChangedByInput | StatusHistoryCreateManyChangedByInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutCreatedByInput, QuoteUncheckedUpdateWithoutCreatedByInput>
    create: XOR<QuoteCreateWithoutCreatedByInput, QuoteUncheckedCreateWithoutCreatedByInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutCreatedByInput, QuoteUncheckedUpdateWithoutCreatedByInput>
  }

  export type QuoteUpdateManyWithWhereWithoutCreatedByInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type QuoteScalarWhereInput = {
    AND?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    OR?: QuoteScalarWhereInput[]
    NOT?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    id?: IntFilter<"Quote"> | number
    clientId?: IntFilter<"Quote"> | number
    createdByUserId?: IntFilter<"Quote"> | number
    quoteNumber?: StringFilter<"Quote"> | string
    title?: StringFilter<"Quote"> | string
    description?: StringNullableFilter<"Quote"> | string | null
    subtotal?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Quote"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Quote"> | string
    status?: EnumQuoteStatusFilter<"Quote"> | $Enums.QuoteStatus
    validUntil?: DateTimeNullableFilter<"Quote"> | Date | string | null
    issuedAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    viewedAt?: DateTimeNullableFilter<"Quote"> | Date | string | null
    notes?: StringNullableFilter<"Quote"> | string | null
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    updatedAt?: DateTimeFilter<"Quote"> | Date | string
  }

  export type ProjectPaymentUpsertWithWhereUniqueWithoutRegisteredByInput = {
    where: ProjectPaymentWhereUniqueInput
    update: XOR<ProjectPaymentUpdateWithoutRegisteredByInput, ProjectPaymentUncheckedUpdateWithoutRegisteredByInput>
    create: XOR<ProjectPaymentCreateWithoutRegisteredByInput, ProjectPaymentUncheckedCreateWithoutRegisteredByInput>
  }

  export type ProjectPaymentUpdateWithWhereUniqueWithoutRegisteredByInput = {
    where: ProjectPaymentWhereUniqueInput
    data: XOR<ProjectPaymentUpdateWithoutRegisteredByInput, ProjectPaymentUncheckedUpdateWithoutRegisteredByInput>
  }

  export type ProjectPaymentUpdateManyWithWhereWithoutRegisteredByInput = {
    where: ProjectPaymentScalarWhereInput
    data: XOR<ProjectPaymentUpdateManyMutationInput, ProjectPaymentUncheckedUpdateManyWithoutRegisteredByInput>
  }

  export type ProjectPaymentScalarWhereInput = {
    AND?: ProjectPaymentScalarWhereInput | ProjectPaymentScalarWhereInput[]
    OR?: ProjectPaymentScalarWhereInput[]
    NOT?: ProjectPaymentScalarWhereInput | ProjectPaymentScalarWhereInput[]
    id?: IntFilter<"ProjectPayment"> | number
    projectId?: IntFilter<"ProjectPayment"> | number
    registeredByUserId?: IntFilter<"ProjectPayment"> | number
    paymentDate?: DateTimeFilter<"ProjectPayment"> | Date | string
    amount?: DecimalFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFilter<"ProjectPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"ProjectPayment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"ProjectPayment"> | string | null
    notes?: StringNullableFilter<"ProjectPayment"> | string | null
    receiptFilePath?: StringNullableFilter<"ProjectPayment"> | string | null
    createdAt?: DateTimeFilter<"ProjectPayment"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPayment"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUploadedByInput, DocumentUncheckedUpdateWithoutUploadedByInput>
    create: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUploadedByInput, DocumentUncheckedUpdateWithoutUploadedByInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUploadedByInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    clientId?: IntNullableFilter<"Document"> | number | null
    quoteId?: IntNullableFilter<"Document"> | number | null
    quoteAcceptanceId?: IntNullableFilter<"Document"> | number | null
    projectId?: IntNullableFilter<"Document"> | number | null
    documentType?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileName?: StringFilter<"Document"> | string
    invoiceNumber?: StringNullableFilter<"Document"> | string | null
    notes?: StringNullableFilter<"Document"> | string | null
    filePath?: StringNullableFilter<"Document"> | string | null
    mimeType?: StringNullableFilter<"Document"> | string | null
    sizeInBytes?: IntNullableFilter<"Document"> | number | null
    bucket?: StringNullableFilter<"Document"> | string | null
    objectKey?: StringNullableFilter<"Document"> | string | null
    uploadedByUserId?: IntNullableFilter<"Document"> | number | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type StatusHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: StatusHistoryWhereUniqueInput
    update: XOR<StatusHistoryUpdateWithoutChangedByInput, StatusHistoryUncheckedUpdateWithoutChangedByInput>
    create: XOR<StatusHistoryCreateWithoutChangedByInput, StatusHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type StatusHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: StatusHistoryWhereUniqueInput
    data: XOR<StatusHistoryUpdateWithoutChangedByInput, StatusHistoryUncheckedUpdateWithoutChangedByInput>
  }

  export type StatusHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: StatusHistoryScalarWhereInput
    data: XOR<StatusHistoryUpdateManyMutationInput, StatusHistoryUncheckedUpdateManyWithoutChangedByInput>
  }

  export type StatusHistoryScalarWhereInput = {
    AND?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
    OR?: StatusHistoryScalarWhereInput[]
    NOT?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
    id?: IntFilter<"StatusHistory"> | number
    entityType?: EnumEntityTypeFilter<"StatusHistory"> | $Enums.EntityType
    entityId?: IntFilter<"StatusHistory"> | number
    oldStatus?: StringFilter<"StatusHistory"> | string
    newStatus?: StringFilter<"StatusHistory"> | string
    changedByUserId?: IntNullableFilter<"StatusHistory"> | number | null
    changedAt?: DateTimeFilter<"StatusHistory"> | Date | string
    notes?: StringNullableFilter<"StatusHistory"> | string | null
  }

  export type QuoteCreateWithoutClientInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutQuotesCreatedInput
    items?: QuoteItemCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutQuoteInput
    projects?: ProjectCreateNestedManyWithoutQuoteInput
    documents?: DocumentCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutClientInput = {
    id?: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteItemUncheckedCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput
    projects?: ProjectUncheckedCreateNestedManyWithoutQuoteInput
    documents?: DocumentUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutClientInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutClientInput, QuoteUncheckedCreateWithoutClientInput>
  }

  export type QuoteCreateManyClientInputEnvelope = {
    data: QuoteCreateManyClientInput | QuoteCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutClientInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutProjectsInput
    acceptance: QuoteAcceptanceCreateNestedOneWithoutProjectInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentCreateNestedManyWithoutProjectInput
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutClientInput = {
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
    quote?: QuoteCreateNestedOneWithoutDocumentsInput
    acceptance?: QuoteAcceptanceCreateNestedOneWithoutDocumentsInput
    project?: ProjectCreateNestedOneWithoutDocumentsInput
    uploadedBy?: UserCreateNestedOneWithoutDocumentsUploadedInput
  }

  export type DocumentUncheckedCreateWithoutClientInput = {
    id?: number
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutClientInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput>
  }

  export type DocumentCreateManyClientInputEnvelope = {
    data: DocumentCreateManyClientInput | DocumentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type QuoteAcceptanceCreateWithoutClientInput = {
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutAcceptancesInput
    items?: QuoteAcceptanceItemCreateNestedManyWithoutAcceptanceInput
    project?: ProjectCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUncheckedCreateWithoutClientInput = {
    id?: number
    quoteId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutAcceptanceInput
    project?: ProjectUncheckedCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceCreateOrConnectWithoutClientInput = {
    where: QuoteAcceptanceWhereUniqueInput
    create: XOR<QuoteAcceptanceCreateWithoutClientInput, QuoteAcceptanceUncheckedCreateWithoutClientInput>
  }

  export type QuoteAcceptanceCreateManyClientInputEnvelope = {
    data: QuoteAcceptanceCreateManyClientInput | QuoteAcceptanceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithWhereUniqueWithoutClientInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutClientInput, QuoteUncheckedUpdateWithoutClientInput>
    create: XOR<QuoteCreateWithoutClientInput, QuoteUncheckedCreateWithoutClientInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutClientInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutClientInput, QuoteUncheckedUpdateWithoutClientInput>
  }

  export type QuoteUpdateManyWithWhereWithoutClientInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    clientId?: IntFilter<"Project"> | number
    quoteId?: IntFilter<"Project"> | number
    quoteAcceptanceId?: IntFilter<"Project"> | number
    projectNumber?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    totalAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFilter<"Project"> | boolean
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    notes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutClientInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutClientInput, DocumentUncheckedUpdateWithoutClientInput>
    create: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutClientInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutClientInput, DocumentUncheckedUpdateWithoutClientInput>
  }

  export type DocumentUpdateManyWithWhereWithoutClientInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutClientInput>
  }

  export type QuoteAcceptanceUpsertWithWhereUniqueWithoutClientInput = {
    where: QuoteAcceptanceWhereUniqueInput
    update: XOR<QuoteAcceptanceUpdateWithoutClientInput, QuoteAcceptanceUncheckedUpdateWithoutClientInput>
    create: XOR<QuoteAcceptanceCreateWithoutClientInput, QuoteAcceptanceUncheckedCreateWithoutClientInput>
  }

  export type QuoteAcceptanceUpdateWithWhereUniqueWithoutClientInput = {
    where: QuoteAcceptanceWhereUniqueInput
    data: XOR<QuoteAcceptanceUpdateWithoutClientInput, QuoteAcceptanceUncheckedUpdateWithoutClientInput>
  }

  export type QuoteAcceptanceUpdateManyWithWhereWithoutClientInput = {
    where: QuoteAcceptanceScalarWhereInput
    data: XOR<QuoteAcceptanceUpdateManyMutationInput, QuoteAcceptanceUncheckedUpdateManyWithoutClientInput>
  }

  export type QuoteAcceptanceScalarWhereInput = {
    AND?: QuoteAcceptanceScalarWhereInput | QuoteAcceptanceScalarWhereInput[]
    OR?: QuoteAcceptanceScalarWhereInput[]
    NOT?: QuoteAcceptanceScalarWhereInput | QuoteAcceptanceScalarWhereInput[]
    id?: IntFilter<"QuoteAcceptance"> | number
    quoteId?: IntFilter<"QuoteAcceptance"> | number
    clientId?: IntFilter<"QuoteAcceptance"> | number
    acceptanceType?: EnumAcceptanceTypeFilter<"QuoteAcceptance"> | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFilter<"QuoteAcceptance"> | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    clientIp?: StringNullableFilter<"QuoteAcceptance"> | string | null
    notes?: StringNullableFilter<"QuoteAcceptance"> | string | null
    createdAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteAcceptance"> | Date | string
  }

  export type ClientCreateWithoutQuotesInput = {
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutClientInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutQuotesInput = {
    id?: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutQuotesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutQuotesInput, ClientUncheckedCreateWithoutQuotesInput>
  }

  export type UserCreateWithoutQuotesCreatedInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentsRegistered?: ProjectPaymentCreateNestedManyWithoutRegisteredByInput
    documentsUploaded?: DocumentCreateNestedManyWithoutUploadedByInput
    statusChanges?: StatusHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutQuotesCreatedInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentsRegistered?: ProjectPaymentUncheckedCreateNestedManyWithoutRegisteredByInput
    documentsUploaded?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    statusChanges?: StatusHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutQuotesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuotesCreatedInput, UserUncheckedCreateWithoutQuotesCreatedInput>
  }

  export type QuoteItemCreateWithoutQuoteInput = {
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptanceItems?: QuoteAcceptanceItemCreateNestedManyWithoutQuoteItemInput
  }

  export type QuoteItemUncheckedCreateWithoutQuoteInput = {
    id?: number
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptanceItems?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutQuoteItemInput
  }

  export type QuoteItemCreateOrConnectWithoutQuoteInput = {
    where: QuoteItemWhereUniqueInput
    create: XOR<QuoteItemCreateWithoutQuoteInput, QuoteItemUncheckedCreateWithoutQuoteInput>
  }

  export type QuoteItemCreateManyQuoteInputEnvelope = {
    data: QuoteItemCreateManyQuoteInput | QuoteItemCreateManyQuoteInput[]
    skipDuplicates?: boolean
  }

  export type QuoteAcceptanceCreateWithoutQuoteInput = {
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAcceptancesInput
    items?: QuoteAcceptanceItemCreateNestedManyWithoutAcceptanceInput
    project?: ProjectCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUncheckedCreateWithoutQuoteInput = {
    id?: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutAcceptanceInput
    project?: ProjectUncheckedCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceCreateOrConnectWithoutQuoteInput = {
    where: QuoteAcceptanceWhereUniqueInput
    create: XOR<QuoteAcceptanceCreateWithoutQuoteInput, QuoteAcceptanceUncheckedCreateWithoutQuoteInput>
  }

  export type QuoteAcceptanceCreateManyQuoteInputEnvelope = {
    data: QuoteAcceptanceCreateManyQuoteInput | QuoteAcceptanceCreateManyQuoteInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutQuoteInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    acceptance: QuoteAcceptanceCreateNestedOneWithoutProjectInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentCreateNestedManyWithoutProjectInput
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutQuoteInput = {
    id?: number
    clientId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutQuoteInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutQuoteInput, ProjectUncheckedCreateWithoutQuoteInput>
  }

  export type ProjectCreateManyQuoteInputEnvelope = {
    data: ProjectCreateManyQuoteInput | ProjectCreateManyQuoteInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutQuoteInput = {
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
    client?: ClientCreateNestedOneWithoutDocumentsInput
    acceptance?: QuoteAcceptanceCreateNestedOneWithoutDocumentsInput
    project?: ProjectCreateNestedOneWithoutDocumentsInput
    uploadedBy?: UserCreateNestedOneWithoutDocumentsUploadedInput
  }

  export type DocumentUncheckedCreateWithoutQuoteInput = {
    id?: number
    clientId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutQuoteInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutQuoteInput, DocumentUncheckedCreateWithoutQuoteInput>
  }

  export type DocumentCreateManyQuoteInputEnvelope = {
    data: DocumentCreateManyQuoteInput | DocumentCreateManyQuoteInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutQuotesInput = {
    update: XOR<ClientUpdateWithoutQuotesInput, ClientUncheckedUpdateWithoutQuotesInput>
    create: XOR<ClientCreateWithoutQuotesInput, ClientUncheckedCreateWithoutQuotesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutQuotesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutQuotesInput, ClientUncheckedUpdateWithoutQuotesInput>
  }

  export type ClientUpdateWithoutQuotesInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutClientNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutQuotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutQuotesCreatedInput = {
    update: XOR<UserUpdateWithoutQuotesCreatedInput, UserUncheckedUpdateWithoutQuotesCreatedInput>
    create: XOR<UserCreateWithoutQuotesCreatedInput, UserUncheckedCreateWithoutQuotesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuotesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuotesCreatedInput, UserUncheckedUpdateWithoutQuotesCreatedInput>
  }

  export type UserUpdateWithoutQuotesCreatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentsRegistered?: ProjectPaymentUpdateManyWithoutRegisteredByNestedInput
    documentsUploaded?: DocumentUpdateManyWithoutUploadedByNestedInput
    statusChanges?: StatusHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutQuotesCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentsRegistered?: ProjectPaymentUncheckedUpdateManyWithoutRegisteredByNestedInput
    documentsUploaded?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    statusChanges?: StatusHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type QuoteItemUpsertWithWhereUniqueWithoutQuoteInput = {
    where: QuoteItemWhereUniqueInput
    update: XOR<QuoteItemUpdateWithoutQuoteInput, QuoteItemUncheckedUpdateWithoutQuoteInput>
    create: XOR<QuoteItemCreateWithoutQuoteInput, QuoteItemUncheckedCreateWithoutQuoteInput>
  }

  export type QuoteItemUpdateWithWhereUniqueWithoutQuoteInput = {
    where: QuoteItemWhereUniqueInput
    data: XOR<QuoteItemUpdateWithoutQuoteInput, QuoteItemUncheckedUpdateWithoutQuoteInput>
  }

  export type QuoteItemUpdateManyWithWhereWithoutQuoteInput = {
    where: QuoteItemScalarWhereInput
    data: XOR<QuoteItemUpdateManyMutationInput, QuoteItemUncheckedUpdateManyWithoutQuoteInput>
  }

  export type QuoteItemScalarWhereInput = {
    AND?: QuoteItemScalarWhereInput | QuoteItemScalarWhereInput[]
    OR?: QuoteItemScalarWhereInput[]
    NOT?: QuoteItemScalarWhereInput | QuoteItemScalarWhereInput[]
    id?: IntFilter<"QuoteItem"> | number
    quoteId?: IntFilter<"QuoteItem"> | number
    itemOrder?: IntFilter<"QuoteItem"> | number
    title?: StringFilter<"QuoteItem"> | string
    description?: StringNullableFilter<"QuoteItem"> | string | null
    quantity?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"QuoteItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFilter<"QuoteItem"> | $Enums.QuoteItemStatus
    createdAt?: DateTimeFilter<"QuoteItem"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteItem"> | Date | string
  }

  export type QuoteAcceptanceUpsertWithWhereUniqueWithoutQuoteInput = {
    where: QuoteAcceptanceWhereUniqueInput
    update: XOR<QuoteAcceptanceUpdateWithoutQuoteInput, QuoteAcceptanceUncheckedUpdateWithoutQuoteInput>
    create: XOR<QuoteAcceptanceCreateWithoutQuoteInput, QuoteAcceptanceUncheckedCreateWithoutQuoteInput>
  }

  export type QuoteAcceptanceUpdateWithWhereUniqueWithoutQuoteInput = {
    where: QuoteAcceptanceWhereUniqueInput
    data: XOR<QuoteAcceptanceUpdateWithoutQuoteInput, QuoteAcceptanceUncheckedUpdateWithoutQuoteInput>
  }

  export type QuoteAcceptanceUpdateManyWithWhereWithoutQuoteInput = {
    where: QuoteAcceptanceScalarWhereInput
    data: XOR<QuoteAcceptanceUpdateManyMutationInput, QuoteAcceptanceUncheckedUpdateManyWithoutQuoteInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutQuoteInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutQuoteInput, ProjectUncheckedUpdateWithoutQuoteInput>
    create: XOR<ProjectCreateWithoutQuoteInput, ProjectUncheckedCreateWithoutQuoteInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutQuoteInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutQuoteInput, ProjectUncheckedUpdateWithoutQuoteInput>
  }

  export type ProjectUpdateManyWithWhereWithoutQuoteInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutQuoteInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutQuoteInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutQuoteInput, DocumentUncheckedUpdateWithoutQuoteInput>
    create: XOR<DocumentCreateWithoutQuoteInput, DocumentUncheckedCreateWithoutQuoteInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutQuoteInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutQuoteInput, DocumentUncheckedUpdateWithoutQuoteInput>
  }

  export type DocumentUpdateManyWithWhereWithoutQuoteInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutQuoteInput>
  }

  export type QuoteCreateWithoutItemsInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutQuotesInput
    createdBy: UserCreateNestedOneWithoutQuotesCreatedInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutQuoteInput
    projects?: ProjectCreateNestedManyWithoutQuoteInput
    documents?: DocumentCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutItemsInput = {
    id?: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput
    projects?: ProjectUncheckedCreateNestedManyWithoutQuoteInput
    documents?: DocumentUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutItemsInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutItemsInput, QuoteUncheckedCreateWithoutItemsInput>
  }

  export type QuoteAcceptanceItemCreateWithoutQuoteItemInput = {
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    acceptance: QuoteAcceptanceCreateNestedOneWithoutItemsInput
  }

  export type QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput = {
    id?: number
    quoteAcceptanceId: number
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type QuoteAcceptanceItemCreateOrConnectWithoutQuoteItemInput = {
    where: QuoteAcceptanceItemWhereUniqueInput
    create: XOR<QuoteAcceptanceItemCreateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput>
  }

  export type QuoteAcceptanceItemCreateManyQuoteItemInputEnvelope = {
    data: QuoteAcceptanceItemCreateManyQuoteItemInput | QuoteAcceptanceItemCreateManyQuoteItemInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithoutItemsInput = {
    update: XOR<QuoteUpdateWithoutItemsInput, QuoteUncheckedUpdateWithoutItemsInput>
    create: XOR<QuoteCreateWithoutItemsInput, QuoteUncheckedCreateWithoutItemsInput>
    where?: QuoteWhereInput
  }

  export type QuoteUpdateToOneWithWhereWithoutItemsInput = {
    where?: QuoteWhereInput
    data: XOR<QuoteUpdateWithoutItemsInput, QuoteUncheckedUpdateWithoutItemsInput>
  }

  export type QuoteUpdateWithoutItemsInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutQuotesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuotesCreatedNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteAcceptanceItemUpsertWithWhereUniqueWithoutQuoteItemInput = {
    where: QuoteAcceptanceItemWhereUniqueInput
    update: XOR<QuoteAcceptanceItemUpdateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedUpdateWithoutQuoteItemInput>
    create: XOR<QuoteAcceptanceItemCreateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedCreateWithoutQuoteItemInput>
  }

  export type QuoteAcceptanceItemUpdateWithWhereUniqueWithoutQuoteItemInput = {
    where: QuoteAcceptanceItemWhereUniqueInput
    data: XOR<QuoteAcceptanceItemUpdateWithoutQuoteItemInput, QuoteAcceptanceItemUncheckedUpdateWithoutQuoteItemInput>
  }

  export type QuoteAcceptanceItemUpdateManyWithWhereWithoutQuoteItemInput = {
    where: QuoteAcceptanceItemScalarWhereInput
    data: XOR<QuoteAcceptanceItemUpdateManyMutationInput, QuoteAcceptanceItemUncheckedUpdateManyWithoutQuoteItemInput>
  }

  export type QuoteAcceptanceItemScalarWhereInput = {
    AND?: QuoteAcceptanceItemScalarWhereInput | QuoteAcceptanceItemScalarWhereInput[]
    OR?: QuoteAcceptanceItemScalarWhereInput[]
    NOT?: QuoteAcceptanceItemScalarWhereInput | QuoteAcceptanceItemScalarWhereInput[]
    id?: IntFilter<"QuoteAcceptanceItem"> | number
    quoteAcceptanceId?: IntFilter<"QuoteAcceptanceItem"> | number
    quoteItemId?: IntFilter<"QuoteAcceptanceItem"> | number
    acceptedPrice?: DecimalFilter<"QuoteAcceptanceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"QuoteAcceptanceItem"> | Date | string
  }

  export type QuoteCreateWithoutAcceptancesInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutQuotesInput
    createdBy: UserCreateNestedOneWithoutQuotesCreatedInput
    items?: QuoteItemCreateNestedManyWithoutQuoteInput
    projects?: ProjectCreateNestedManyWithoutQuoteInput
    documents?: DocumentCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutAcceptancesInput = {
    id?: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteItemUncheckedCreateNestedManyWithoutQuoteInput
    projects?: ProjectUncheckedCreateNestedManyWithoutQuoteInput
    documents?: DocumentUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutAcceptancesInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutAcceptancesInput, QuoteUncheckedCreateWithoutAcceptancesInput>
  }

  export type ClientCreateWithoutAcceptancesInput = {
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteCreateNestedManyWithoutClientInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    documents?: DocumentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAcceptancesInput = {
    id?: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteUncheckedCreateNestedManyWithoutClientInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAcceptancesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAcceptancesInput, ClientUncheckedCreateWithoutAcceptancesInput>
  }

  export type QuoteAcceptanceItemCreateWithoutAcceptanceInput = {
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    quoteItem: QuoteItemCreateNestedOneWithoutAcceptanceItemsInput
  }

  export type QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput = {
    id?: number
    quoteItemId: number
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type QuoteAcceptanceItemCreateOrConnectWithoutAcceptanceInput = {
    where: QuoteAcceptanceItemWhereUniqueInput
    create: XOR<QuoteAcceptanceItemCreateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput>
  }

  export type QuoteAcceptanceItemCreateManyAcceptanceInputEnvelope = {
    data: QuoteAcceptanceItemCreateManyAcceptanceInput | QuoteAcceptanceItemCreateManyAcceptanceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutAcceptanceInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    quote: QuoteCreateNestedOneWithoutProjectsInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentCreateNestedManyWithoutProjectInput
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAcceptanceInput = {
    id?: number
    clientId: number
    quoteId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAcceptanceInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAcceptanceInput, ProjectUncheckedCreateWithoutAcceptanceInput>
  }

  export type DocumentCreateWithoutAcceptanceInput = {
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
    client?: ClientCreateNestedOneWithoutDocumentsInput
    quote?: QuoteCreateNestedOneWithoutDocumentsInput
    project?: ProjectCreateNestedOneWithoutDocumentsInput
    uploadedBy?: UserCreateNestedOneWithoutDocumentsUploadedInput
  }

  export type DocumentUncheckedCreateWithoutAcceptanceInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutAcceptanceInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAcceptanceInput, DocumentUncheckedCreateWithoutAcceptanceInput>
  }

  export type DocumentCreateManyAcceptanceInputEnvelope = {
    data: DocumentCreateManyAcceptanceInput | DocumentCreateManyAcceptanceInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithoutAcceptancesInput = {
    update: XOR<QuoteUpdateWithoutAcceptancesInput, QuoteUncheckedUpdateWithoutAcceptancesInput>
    create: XOR<QuoteCreateWithoutAcceptancesInput, QuoteUncheckedCreateWithoutAcceptancesInput>
    where?: QuoteWhereInput
  }

  export type QuoteUpdateToOneWithWhereWithoutAcceptancesInput = {
    where?: QuoteWhereInput
    data: XOR<QuoteUpdateWithoutAcceptancesInput, QuoteUncheckedUpdateWithoutAcceptancesInput>
  }

  export type QuoteUpdateWithoutAcceptancesInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutQuotesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuotesCreatedNestedInput
    items?: QuoteItemUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutAcceptancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type ClientUpsertWithoutAcceptancesInput = {
    update: XOR<ClientUpdateWithoutAcceptancesInput, ClientUncheckedUpdateWithoutAcceptancesInput>
    create: XOR<ClientCreateWithoutAcceptancesInput, ClientUncheckedCreateWithoutAcceptancesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAcceptancesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAcceptancesInput, ClientUncheckedUpdateWithoutAcceptancesInput>
  }

  export type ClientUpdateWithoutAcceptancesInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUpdateManyWithoutClientNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAcceptancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUncheckedUpdateManyWithoutClientNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type QuoteAcceptanceItemUpsertWithWhereUniqueWithoutAcceptanceInput = {
    where: QuoteAcceptanceItemWhereUniqueInput
    update: XOR<QuoteAcceptanceItemUpdateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedUpdateWithoutAcceptanceInput>
    create: XOR<QuoteAcceptanceItemCreateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedCreateWithoutAcceptanceInput>
  }

  export type QuoteAcceptanceItemUpdateWithWhereUniqueWithoutAcceptanceInput = {
    where: QuoteAcceptanceItemWhereUniqueInput
    data: XOR<QuoteAcceptanceItemUpdateWithoutAcceptanceInput, QuoteAcceptanceItemUncheckedUpdateWithoutAcceptanceInput>
  }

  export type QuoteAcceptanceItemUpdateManyWithWhereWithoutAcceptanceInput = {
    where: QuoteAcceptanceItemScalarWhereInput
    data: XOR<QuoteAcceptanceItemUpdateManyMutationInput, QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceInput>
  }

  export type ProjectUpsertWithoutAcceptanceInput = {
    update: XOR<ProjectUpdateWithoutAcceptanceInput, ProjectUncheckedUpdateWithoutAcceptanceInput>
    create: XOR<ProjectCreateWithoutAcceptanceInput, ProjectUncheckedCreateWithoutAcceptanceInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAcceptanceInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAcceptanceInput, ProjectUncheckedUpdateWithoutAcceptanceInput>
  }

  export type ProjectUpdateWithoutAcceptanceInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    quote?: QuoteUpdateOneRequiredWithoutProjectsNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUpdateManyWithoutProjectNestedInput
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAcceptanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutAcceptanceInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutAcceptanceInput, DocumentUncheckedUpdateWithoutAcceptanceInput>
    create: XOR<DocumentCreateWithoutAcceptanceInput, DocumentUncheckedCreateWithoutAcceptanceInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutAcceptanceInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutAcceptanceInput, DocumentUncheckedUpdateWithoutAcceptanceInput>
  }

  export type DocumentUpdateManyWithWhereWithoutAcceptanceInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutAcceptanceInput>
  }

  export type QuoteAcceptanceCreateWithoutItemsInput = {
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutAcceptancesInput
    client: ClientCreateNestedOneWithoutAcceptancesInput
    project?: ProjectCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUncheckedCreateWithoutItemsInput = {
    id?: number
    quoteId: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectUncheckedCreateNestedOneWithoutAcceptanceInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceCreateOrConnectWithoutItemsInput = {
    where: QuoteAcceptanceWhereUniqueInput
    create: XOR<QuoteAcceptanceCreateWithoutItemsInput, QuoteAcceptanceUncheckedCreateWithoutItemsInput>
  }

  export type QuoteItemCreateWithoutAcceptanceItemsInput = {
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutItemsInput
  }

  export type QuoteItemUncheckedCreateWithoutAcceptanceItemsInput = {
    id?: number
    quoteId: number
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuoteItemCreateOrConnectWithoutAcceptanceItemsInput = {
    where: QuoteItemWhereUniqueInput
    create: XOR<QuoteItemCreateWithoutAcceptanceItemsInput, QuoteItemUncheckedCreateWithoutAcceptanceItemsInput>
  }

  export type QuoteAcceptanceUpsertWithoutItemsInput = {
    update: XOR<QuoteAcceptanceUpdateWithoutItemsInput, QuoteAcceptanceUncheckedUpdateWithoutItemsInput>
    create: XOR<QuoteAcceptanceCreateWithoutItemsInput, QuoteAcceptanceUncheckedCreateWithoutItemsInput>
    where?: QuoteAcceptanceWhereInput
  }

  export type QuoteAcceptanceUpdateToOneWithWhereWithoutItemsInput = {
    where?: QuoteAcceptanceWhereInput
    data: XOR<QuoteAcceptanceUpdateWithoutItemsInput, QuoteAcceptanceUncheckedUpdateWithoutItemsInput>
  }

  export type QuoteAcceptanceUpdateWithoutItemsInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutAcceptancesNestedInput
    client?: ClientUpdateOneRequiredWithoutAcceptancesNestedInput
    project?: ProjectUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUncheckedUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteItemUpsertWithoutAcceptanceItemsInput = {
    update: XOR<QuoteItemUpdateWithoutAcceptanceItemsInput, QuoteItemUncheckedUpdateWithoutAcceptanceItemsInput>
    create: XOR<QuoteItemCreateWithoutAcceptanceItemsInput, QuoteItemUncheckedCreateWithoutAcceptanceItemsInput>
    where?: QuoteItemWhereInput
  }

  export type QuoteItemUpdateToOneWithWhereWithoutAcceptanceItemsInput = {
    where?: QuoteItemWhereInput
    data: XOR<QuoteItemUpdateWithoutAcceptanceItemsInput, QuoteItemUncheckedUpdateWithoutAcceptanceItemsInput>
  }

  export type QuoteItemUpdateWithoutAcceptanceItemsInput = {
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutItemsNestedInput
  }

  export type QuoteItemUncheckedUpdateWithoutAcceptanceItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateWithoutProjectsInput = {
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteCreateNestedManyWithoutClientInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutProjectsInput = {
    id?: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutProjectsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
  }

  export type QuoteCreateWithoutProjectsInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutQuotesInput
    createdBy: UserCreateNestedOneWithoutQuotesCreatedInput
    items?: QuoteItemCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutQuoteInput
    documents?: DocumentCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutProjectsInput = {
    id?: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteItemUncheckedCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput
    documents?: DocumentUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutProjectsInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutProjectsInput, QuoteUncheckedCreateWithoutProjectsInput>
  }

  export type QuoteAcceptanceCreateWithoutProjectInput = {
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutAcceptancesInput
    client: ClientCreateNestedOneWithoutAcceptancesInput
    items?: QuoteAcceptanceItemCreateNestedManyWithoutAcceptanceInput
    documents?: DocumentCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUncheckedCreateWithoutProjectInput = {
    id?: number
    quoteId: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutAcceptanceInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAcceptanceInput
  }

  export type QuoteAcceptanceCreateOrConnectWithoutProjectInput = {
    where: QuoteAcceptanceWhereUniqueInput
    create: XOR<QuoteAcceptanceCreateWithoutProjectInput, QuoteAcceptanceUncheckedCreateWithoutProjectInput>
  }

  export type ProjectItemCreateWithoutProjectInput = {
    quoteItemId?: number | null
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.ProjectItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUncheckedCreateWithoutProjectInput = {
    id?: number
    quoteItemId?: number | null
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.ProjectItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemCreateOrConnectWithoutProjectInput = {
    where: ProjectItemWhereUniqueInput
    create: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput>
  }

  export type ProjectItemCreateManyProjectInputEnvelope = {
    data: ProjectItemCreateManyProjectInput | ProjectItemCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectPaymentCreateWithoutProjectInput = {
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredBy: UserCreateNestedOneWithoutPaymentsRegisteredInput
  }

  export type ProjectPaymentUncheckedCreateWithoutProjectInput = {
    id?: number
    registeredByUserId: number
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPaymentCreateOrConnectWithoutProjectInput = {
    where: ProjectPaymentWhereUniqueInput
    create: XOR<ProjectPaymentCreateWithoutProjectInput, ProjectPaymentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPaymentCreateManyProjectInputEnvelope = {
    data: ProjectPaymentCreateManyProjectInput | ProjectPaymentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutProjectInput = {
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
    client?: ClientCreateNestedOneWithoutDocumentsInput
    quote?: QuoteCreateNestedOneWithoutDocumentsInput
    acceptance?: QuoteAcceptanceCreateNestedOneWithoutDocumentsInput
    uploadedBy?: UserCreateNestedOneWithoutDocumentsUploadedInput
  }

  export type DocumentUncheckedCreateWithoutProjectInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutProjectInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput>
  }

  export type DocumentCreateManyProjectInputEnvelope = {
    data: DocumentCreateManyProjectInput | DocumentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutProjectsInput = {
    update: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type ClientUpdateWithoutProjectsInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUpdateManyWithoutClientNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type QuoteUpsertWithoutProjectsInput = {
    update: XOR<QuoteUpdateWithoutProjectsInput, QuoteUncheckedUpdateWithoutProjectsInput>
    create: XOR<QuoteCreateWithoutProjectsInput, QuoteUncheckedCreateWithoutProjectsInput>
    where?: QuoteWhereInput
  }

  export type QuoteUpdateToOneWithWhereWithoutProjectsInput = {
    where?: QuoteWhereInput
    data: XOR<QuoteUpdateWithoutProjectsInput, QuoteUncheckedUpdateWithoutProjectsInput>
  }

  export type QuoteUpdateWithoutProjectsInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutQuotesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuotesCreatedNestedInput
    items?: QuoteItemUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteAcceptanceUpsertWithoutProjectInput = {
    update: XOR<QuoteAcceptanceUpdateWithoutProjectInput, QuoteAcceptanceUncheckedUpdateWithoutProjectInput>
    create: XOR<QuoteAcceptanceCreateWithoutProjectInput, QuoteAcceptanceUncheckedCreateWithoutProjectInput>
    where?: QuoteAcceptanceWhereInput
  }

  export type QuoteAcceptanceUpdateToOneWithWhereWithoutProjectInput = {
    where?: QuoteAcceptanceWhereInput
    data: XOR<QuoteAcceptanceUpdateWithoutProjectInput, QuoteAcceptanceUncheckedUpdateWithoutProjectInput>
  }

  export type QuoteAcceptanceUpdateWithoutProjectInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutAcceptancesNestedInput
    client?: ClientUpdateOneRequiredWithoutAcceptancesNestedInput
    items?: QuoteAcceptanceItemUpdateManyWithoutAcceptanceNestedInput
    documents?: DocumentUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAcceptanceNestedInput
  }

  export type ProjectItemUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectItemWhereUniqueInput
    update: XOR<ProjectItemUpdateWithoutProjectInput, ProjectItemUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput>
  }

  export type ProjectItemUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectItemWhereUniqueInput
    data: XOR<ProjectItemUpdateWithoutProjectInput, ProjectItemUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectItemUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectItemScalarWhereInput
    data: XOR<ProjectItemUpdateManyMutationInput, ProjectItemUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectItemScalarWhereInput = {
    AND?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
    OR?: ProjectItemScalarWhereInput[]
    NOT?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
    id?: IntFilter<"ProjectItem"> | number
    projectId?: IntFilter<"ProjectItem"> | number
    quoteItemId?: IntNullableFilter<"ProjectItem"> | number | null
    title?: StringFilter<"ProjectItem"> | string
    description?: StringNullableFilter<"ProjectItem"> | string | null
    quantity?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"ProjectItem"> | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFilter<"ProjectItem"> | $Enums.ProjectItemStatus
    createdAt?: DateTimeFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectItem"> | Date | string
  }

  export type ProjectPaymentUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectPaymentWhereUniqueInput
    update: XOR<ProjectPaymentUpdateWithoutProjectInput, ProjectPaymentUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectPaymentCreateWithoutProjectInput, ProjectPaymentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPaymentUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectPaymentWhereUniqueInput
    data: XOR<ProjectPaymentUpdateWithoutProjectInput, ProjectPaymentUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPaymentUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectPaymentScalarWhereInput
    data: XOR<ProjectPaymentUpdateManyMutationInput, ProjectPaymentUncheckedUpdateManyWithoutProjectInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutProjectInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutProjectInput, DocumentUncheckedUpdateWithoutProjectInput>
    create: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutProjectInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutProjectInput, DocumentUncheckedUpdateWithoutProjectInput>
  }

  export type DocumentUpdateManyWithWhereWithoutProjectInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutItemsInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    quote: QuoteCreateNestedOneWithoutProjectsInput
    acceptance: QuoteAcceptanceCreateNestedOneWithoutProjectInput
    payments?: ProjectPaymentCreateNestedManyWithoutProjectInput
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutItemsInput = {
    id?: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutItemsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
  }

  export type ProjectUpsertWithoutItemsInput = {
    update: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type ProjectUpdateWithoutItemsInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    quote?: QuoteUpdateOneRequiredWithoutProjectsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput
    payments?: ProjectPaymentUpdateManyWithoutProjectNestedInput
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutPaymentsInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    quote: QuoteCreateNestedOneWithoutProjectsInput
    acceptance: QuoteAcceptanceCreateNestedOneWithoutProjectInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPaymentsInput = {
    id?: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPaymentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsRegisteredInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteCreateNestedManyWithoutCreatedByInput
    documentsUploaded?: DocumentCreateNestedManyWithoutUploadedByInput
    statusChanges?: StatusHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutPaymentsRegisteredInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteUncheckedCreateNestedManyWithoutCreatedByInput
    documentsUploaded?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    statusChanges?: StatusHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutPaymentsRegisteredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsRegisteredInput, UserUncheckedCreateWithoutPaymentsRegisteredInput>
  }

  export type ProjectUpsertWithoutPaymentsInput = {
    update: XOR<ProjectUpdateWithoutPaymentsInput, ProjectUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPaymentsInput, ProjectUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProjectUpdateWithoutPaymentsInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    quote?: QuoteUpdateOneRequiredWithoutProjectsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutPaymentsRegisteredInput = {
    update: XOR<UserUpdateWithoutPaymentsRegisteredInput, UserUncheckedUpdateWithoutPaymentsRegisteredInput>
    create: XOR<UserCreateWithoutPaymentsRegisteredInput, UserUncheckedCreateWithoutPaymentsRegisteredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsRegisteredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsRegisteredInput, UserUncheckedUpdateWithoutPaymentsRegisteredInput>
  }

  export type UserUpdateWithoutPaymentsRegisteredInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUpdateManyWithoutCreatedByNestedInput
    documentsUploaded?: DocumentUpdateManyWithoutUploadedByNestedInput
    statusChanges?: StatusHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsRegisteredInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUncheckedUpdateManyWithoutCreatedByNestedInput
    documentsUploaded?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    statusChanges?: StatusHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type ClientCreateWithoutDocumentsInput = {
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteCreateNestedManyWithoutClientInput
    projects?: ProjectCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDocumentsInput = {
    id?: number
    businessName: string
    contactName: string
    email: string
    phone: string
    address?: string | null
    taxId?: string | null
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotes?: QuoteUncheckedCreateNestedManyWithoutClientInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDocumentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
  }

  export type QuoteCreateWithoutDocumentsInput = {
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutQuotesInput
    createdBy: UserCreateNestedOneWithoutQuotesCreatedInput
    items?: QuoteItemCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceCreateNestedManyWithoutQuoteInput
    projects?: ProjectCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutDocumentsInput = {
    id?: number
    clientId: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteItemUncheckedCreateNestedManyWithoutQuoteInput
    acceptances?: QuoteAcceptanceUncheckedCreateNestedManyWithoutQuoteInput
    projects?: ProjectUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutDocumentsInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutDocumentsInput, QuoteUncheckedCreateWithoutDocumentsInput>
  }

  export type QuoteAcceptanceCreateWithoutDocumentsInput = {
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quote: QuoteCreateNestedOneWithoutAcceptancesInput
    client: ClientCreateNestedOneWithoutAcceptancesInput
    items?: QuoteAcceptanceItemCreateNestedManyWithoutAcceptanceInput
    project?: ProjectCreateNestedOneWithoutAcceptanceInput
  }

  export type QuoteAcceptanceUncheckedCreateWithoutDocumentsInput = {
    id?: number
    quoteId: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuoteAcceptanceItemUncheckedCreateNestedManyWithoutAcceptanceInput
    project?: ProjectUncheckedCreateNestedOneWithoutAcceptanceInput
  }

  export type QuoteAcceptanceCreateOrConnectWithoutDocumentsInput = {
    where: QuoteAcceptanceWhereUniqueInput
    create: XOR<QuoteAcceptanceCreateWithoutDocumentsInput, QuoteAcceptanceUncheckedCreateWithoutDocumentsInput>
  }

  export type ProjectCreateWithoutDocumentsInput = {
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    quote: QuoteCreateNestedOneWithoutProjectsInput
    acceptance: QuoteAcceptanceCreateNestedOneWithoutProjectInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDocumentsInput = {
    id?: number
    clientId: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
    payments?: ProjectPaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDocumentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
  }

  export type UserCreateWithoutDocumentsUploadedInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteCreateNestedManyWithoutCreatedByInput
    paymentsRegistered?: ProjectPaymentCreateNestedManyWithoutRegisteredByInput
    statusChanges?: StatusHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutDocumentsUploadedInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteUncheckedCreateNestedManyWithoutCreatedByInput
    paymentsRegistered?: ProjectPaymentUncheckedCreateNestedManyWithoutRegisteredByInput
    statusChanges?: StatusHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutDocumentsUploadedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsUploadedInput, UserUncheckedCreateWithoutDocumentsUploadedInput>
  }

  export type ClientUpsertWithoutDocumentsInput = {
    update: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type ClientUpdateWithoutDocumentsInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUpdateManyWithoutClientNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotes?: QuoteUncheckedUpdateManyWithoutClientNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type QuoteUpsertWithoutDocumentsInput = {
    update: XOR<QuoteUpdateWithoutDocumentsInput, QuoteUncheckedUpdateWithoutDocumentsInput>
    create: XOR<QuoteCreateWithoutDocumentsInput, QuoteUncheckedCreateWithoutDocumentsInput>
    where?: QuoteWhereInput
  }

  export type QuoteUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: QuoteWhereInput
    data: XOR<QuoteUpdateWithoutDocumentsInput, QuoteUncheckedUpdateWithoutDocumentsInput>
  }

  export type QuoteUpdateWithoutDocumentsInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutQuotesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuotesCreatedNestedInput
    items?: QuoteItemUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteAcceptanceUpsertWithoutDocumentsInput = {
    update: XOR<QuoteAcceptanceUpdateWithoutDocumentsInput, QuoteAcceptanceUncheckedUpdateWithoutDocumentsInput>
    create: XOR<QuoteAcceptanceCreateWithoutDocumentsInput, QuoteAcceptanceUncheckedCreateWithoutDocumentsInput>
    where?: QuoteAcceptanceWhereInput
  }

  export type QuoteAcceptanceUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: QuoteAcceptanceWhereInput
    data: XOR<QuoteAcceptanceUpdateWithoutDocumentsInput, QuoteAcceptanceUncheckedUpdateWithoutDocumentsInput>
  }

  export type QuoteAcceptanceUpdateWithoutDocumentsInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutAcceptancesNestedInput
    client?: ClientUpdateOneRequiredWithoutAcceptancesNestedInput
    items?: QuoteAcceptanceItemUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUpdateOneWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUncheckedUpdateOneWithoutAcceptanceNestedInput
  }

  export type ProjectUpsertWithoutDocumentsInput = {
    update: XOR<ProjectUpdateWithoutDocumentsInput, ProjectUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDocumentsInput, ProjectUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProjectUpdateWithoutDocumentsInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    quote?: QuoteUpdateOneRequiredWithoutProjectsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutDocumentsUploadedInput = {
    update: XOR<UserUpdateWithoutDocumentsUploadedInput, UserUncheckedUpdateWithoutDocumentsUploadedInput>
    create: XOR<UserCreateWithoutDocumentsUploadedInput, UserUncheckedCreateWithoutDocumentsUploadedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsUploadedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsUploadedInput, UserUncheckedUpdateWithoutDocumentsUploadedInput>
  }

  export type UserUpdateWithoutDocumentsUploadedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUpdateManyWithoutCreatedByNestedInput
    paymentsRegistered?: ProjectPaymentUpdateManyWithoutRegisteredByNestedInput
    statusChanges?: StatusHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsUploadedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUncheckedUpdateManyWithoutCreatedByNestedInput
    paymentsRegistered?: ProjectPaymentUncheckedUpdateManyWithoutRegisteredByNestedInput
    statusChanges?: StatusHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type UserCreateWithoutStatusChangesInput = {
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteCreateNestedManyWithoutCreatedByInput
    paymentsRegistered?: ProjectPaymentCreateNestedManyWithoutRegisteredByInput
    documentsUploaded?: DocumentCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutStatusChangesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotesCreated?: QuoteUncheckedCreateNestedManyWithoutCreatedByInput
    paymentsRegistered?: ProjectPaymentUncheckedCreateNestedManyWithoutRegisteredByInput
    documentsUploaded?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutStatusChangesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatusChangesInput, UserUncheckedCreateWithoutStatusChangesInput>
  }

  export type UserUpsertWithoutStatusChangesInput = {
    update: XOR<UserUpdateWithoutStatusChangesInput, UserUncheckedUpdateWithoutStatusChangesInput>
    create: XOR<UserCreateWithoutStatusChangesInput, UserUncheckedCreateWithoutStatusChangesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatusChangesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatusChangesInput, UserUncheckedUpdateWithoutStatusChangesInput>
  }

  export type UserUpdateWithoutStatusChangesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUpdateManyWithoutCreatedByNestedInput
    paymentsRegistered?: ProjectPaymentUpdateManyWithoutRegisteredByNestedInput
    documentsUploaded?: DocumentUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutStatusChangesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotesCreated?: QuoteUncheckedUpdateManyWithoutCreatedByNestedInput
    paymentsRegistered?: ProjectPaymentUncheckedUpdateManyWithoutRegisteredByNestedInput
    documentsUploaded?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type QuoteCreateManyCreatedByInput = {
    id?: number
    clientId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPaymentCreateManyRegisteredByInput = {
    id?: number
    projectId: number
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyUploadedByInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    createdAt?: Date | string
  }

  export type StatusHistoryCreateManyChangedByInput = {
    id?: number
    entityType: $Enums.EntityType
    entityId: number
    oldStatus: string
    newStatus: string
    changedAt?: Date | string
    notes?: string | null
  }

  export type QuoteUpdateWithoutCreatedByInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutQuotesNestedInput
    items?: QuoteItemUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentUpdateWithoutRegisteredByInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type ProjectPaymentUncheckedUpdateWithoutRegisteredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentUncheckedUpdateManyWithoutRegisteredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutUploadedByInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutDocumentsNestedInput
    quote?: QuoteUpdateOneWithoutDocumentsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneWithoutDocumentsNestedInput
    project?: ProjectUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutUploadedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryUpdateWithoutChangedByInput = {
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteCreateManyClientInput = {
    id?: number
    createdByUserId: number
    quoteNumber: string
    title: string
    description?: string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    taxRate?: Decimal | DecimalJsLike | number | string
    taxAmount?: Decimal | DecimalJsLike | number | string
    totalAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.QuoteStatus
    validUntil?: Date | string | null
    issuedAt?: Date | string | null
    sentAt?: Date | string | null
    viewedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyClientInput = {
    id?: number
    quoteId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyClientInput = {
    id?: number
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type QuoteAcceptanceCreateManyClientInput = {
    id?: number
    quoteId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuoteUpdateWithoutClientInput = {
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutQuotesCreatedNestedInput
    items?: QuoteItemUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteItemUncheckedUpdateManyWithoutQuoteNestedInput
    acceptances?: QuoteAcceptanceUncheckedUpdateManyWithoutQuoteNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutQuoteNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    quoteNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutClientInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutProjectsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUpdateManyWithoutProjectNestedInput
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutClientInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneWithoutDocumentsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneWithoutDocumentsNestedInput
    project?: ProjectUpdateOneWithoutDocumentsNestedInput
    uploadedBy?: UserUpdateOneWithoutDocumentsUploadedNestedInput
  }

  export type DocumentUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceUpdateWithoutClientInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quote?: QuoteUpdateOneRequiredWithoutAcceptancesNestedInput
    items?: QuoteAcceptanceItemUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUncheckedUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteItemCreateManyQuoteInput = {
    id?: number
    itemOrder: number
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.QuoteItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuoteAcceptanceCreateManyQuoteInput = {
    id?: number
    clientId: number
    acceptanceType: $Enums.AcceptanceType
    acceptedTotalAmount: Decimal | DecimalJsLike | number | string
    acceptedAt?: Date | string
    clientIp?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyQuoteInput = {
    id?: number
    clientId: number
    quoteAcceptanceId: number
    projectNumber: string
    title: string
    description?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    pendingAmount: Decimal | DecimalJsLike | number | string
    paidPercentage?: Decimal | DecimalJsLike | number | string
    isFullyPaid?: boolean
    status?: $Enums.ProjectStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    canceledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyQuoteInput = {
    id?: number
    clientId?: number | null
    quoteAcceptanceId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type QuoteItemUpdateWithoutQuoteInput = {
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptanceItems?: QuoteAcceptanceItemUpdateManyWithoutQuoteItemNestedInput
  }

  export type QuoteItemUncheckedUpdateWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptanceItems?: QuoteAcceptanceItemUncheckedUpdateManyWithoutQuoteItemNestedInput
  }

  export type QuoteItemUncheckedUpdateManyWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemOrder?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumQuoteItemStatusFieldUpdateOperationsInput | $Enums.QuoteItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceUpdateWithoutQuoteInput = {
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAcceptancesNestedInput
    items?: QuoteAcceptanceItemUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceNestedInput
    project?: ProjectUncheckedUpdateOneWithoutAcceptanceNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAcceptanceNestedInput
  }

  export type QuoteAcceptanceUncheckedUpdateManyWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    acceptanceType?: EnumAcceptanceTypeFieldUpdateOperationsInput | $Enums.AcceptanceType
    acceptedTotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientIp?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutQuoteInput = {
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutProjectNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUpdateManyWithoutProjectNestedInput
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
    payments?: ProjectPaymentUncheckedUpdateManyWithoutProjectNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    projectNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFullyPaid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutQuoteInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutDocumentsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneWithoutDocumentsNestedInput
    project?: ProjectUpdateOneWithoutDocumentsNestedInput
    uploadedBy?: UserUpdateOneWithoutDocumentsUploadedNestedInput
  }

  export type DocumentUncheckedUpdateWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutQuoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemCreateManyQuoteItemInput = {
    id?: number
    quoteAcceptanceId: number
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type QuoteAcceptanceItemUpdateWithoutQuoteItemInput = {
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptance?: QuoteAcceptanceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type QuoteAcceptanceItemUncheckedUpdateWithoutQuoteItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemUncheckedUpdateManyWithoutQuoteItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteAcceptanceId?: IntFieldUpdateOperationsInput | number
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemCreateManyAcceptanceInput = {
    id?: number
    quoteItemId: number
    acceptedPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DocumentCreateManyAcceptanceInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    projectId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type QuoteAcceptanceItemUpdateWithoutAcceptanceInput = {
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quoteItem?: QuoteItemUpdateOneRequiredWithoutAcceptanceItemsNestedInput
  }

  export type QuoteAcceptanceItemUncheckedUpdateWithoutAcceptanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteItemId?: IntFieldUpdateOperationsInput | number
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteAcceptanceItemUncheckedUpdateManyWithoutAcceptanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteItemId?: IntFieldUpdateOperationsInput | number
    acceptedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutAcceptanceInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutDocumentsNestedInput
    quote?: QuoteUpdateOneWithoutDocumentsNestedInput
    project?: ProjectUpdateOneWithoutDocumentsNestedInput
    uploadedBy?: UserUpdateOneWithoutDocumentsUploadedNestedInput
  }

  export type DocumentUncheckedUpdateWithoutAcceptanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutAcceptanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemCreateManyProjectInput = {
    id?: number
    quoteItemId?: number | null
    title: string
    description?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.ProjectItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectPaymentCreateManyProjectInput = {
    id?: number
    registeredByUserId: number
    paymentDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    percentageEquivalent: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    receiptFilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyProjectInput = {
    id?: number
    clientId?: number | null
    quoteId?: number | null
    quoteAcceptanceId?: number | null
    documentType: $Enums.DocumentType
    fileName: string
    invoiceNumber?: string | null
    notes?: string | null
    filePath?: string | null
    mimeType?: string | null
    sizeInBytes?: number | null
    bucket?: string | null
    objectKey?: string | null
    uploadedByUserId?: number | null
    createdAt?: Date | string
  }

  export type ProjectItemUpdateWithoutProjectInput = {
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    quoteItemId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumProjectItemStatusFieldUpdateOperationsInput | $Enums.ProjectItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentUpdateWithoutProjectInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredBy?: UserUpdateOneRequiredWithoutPaymentsRegisteredNestedInput
  }

  export type ProjectPaymentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    registeredByUserId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPaymentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    registeredByUserId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentageEquivalent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutProjectInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutDocumentsNestedInput
    quote?: QuoteUpdateOneWithoutDocumentsNestedInput
    acceptance?: QuoteAcceptanceUpdateOneWithoutDocumentsNestedInput
    uploadedBy?: UserUpdateOneWithoutDocumentsUploadedNestedInput
  }

  export type DocumentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteId?: NullableIntFieldUpdateOperationsInput | number | null
    quoteAcceptanceId?: NullableIntFieldUpdateOperationsInput | number | null
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    sizeInBytes?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}