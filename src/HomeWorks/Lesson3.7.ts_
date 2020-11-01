const mistake = [] as Array<number>;

let bigObject = {
  commit: {
    a1: "a1a1a1",
    a2: "a2a2a2",
  },
  commits: [
    {
      a1: "a1a1a1",
      a2: "a2a2a2",
    },
  ],
  diffs: [
    {
      b1: "b1b1b1",
      b2: "b2b2b2",
      b3: null,
      b4: false,
    },
  ],
  compare_timeout: false,
  compare_same_ref: false,
};

bigObject.compare_same_ref = false;

type TMyBigObject = typeof bigObject;

type t = TMyBigObject["commits"];

const typedBigObject: Readonly<TMyBigObject> = bigObject;

type MyReadonly1 = {
  readonly [N: string]: any;
};

type MyReadonly2 = {
  readonly [N in "asd" | "qwe"]: N;
};

const some2: MyReadonly2 = {
  asd: "asd",
  qwe: "qwe",
};

type MyReadonly<T> = {
  readonly [N in keyof T]: T[N];
};

type MyPartial1<T> = {
  [N in keyof T]?: T[N];
};

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type piked = MyPick<TMyBigObject, "commit" | "diffs">;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
};

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

typedBigObjectDeep.commit = "123";

// убираем readonly

type TSomeType = MyReadonlyDeep<TMyBigObject>;
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;
type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number, b: string): boolean {
  return a > 0;
}

type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FnParameters<T> = T extends (...args: infer R) => any ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TParameters = FnParameters<typeof greaterThenZero>;
