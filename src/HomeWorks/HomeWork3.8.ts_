// 1

type TypeStrConcat = (str1: string, str2: string) => string;

// 2

interface IMyHomeTask {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData?: Array<IMyHomeTask>;
}

// 3

interface MyArray<T> {
  [N: number]: T;
  reduce(fn: (prev: T, val: T) => T, init: T): T;
}

// 4

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
};

// 5
function HomeComponent(props: { firstProp: string }) {
  return <div>{props.firstProp}</div>;
}
type TMyType<T> = T extends (props: infer R) => any ? R : never;
type t = TMyType<typeof HomeComponent>;

// 6
type TGetJSXPropsProp<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

type TDivProps = TGetJSXPropsProp<"div">;

const props: TDivProps = {
  some: "1233", // throw error потому что не содержится в атрибутах div
  className: "handler", // не выкидывает ошибку так как валидно для div элемента
};
