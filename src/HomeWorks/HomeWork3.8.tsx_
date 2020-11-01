import * as React from "react";

// черновики задания 5
/*
function HomeComponent(props: { firstProp: string }) {
  return <div>{props.firstProp}</div>;
}

function greaterThenZero(a: number, b: string): boolean {
  return a > 0;
}

type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FnParameters<T> = T extends (...args: infer R) => any ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TParameters = FnParameters<typeof greaterThenZero>;

type TMyType<T> = T extends (props: infer R) => any ? R : never;
type TMyType2<T> = T extends React.Component ? boolean : number;

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type t1 = typeof HomeComponent;
type t11 = t1["props"];
type t2 = TMyType<typeof HomeComponent>;

type t3 = TMyType2<typeof HomeComponent>;
*/

type TDivElement = JSX.IntrinsicElements["div"];
type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type TGetJSXPropsProp2<T> = {
  [N in keyof T]: T[N];
};

type jsx = keyof JSX.IntrinsicElements;

type TGetJSXPropsProp<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

type TDivProps = TGetJSXPropsProp<"div">;

const props: TDivProps = {
  some: "1233", // throw error потому что не содержится в атрибутах div
  className: "handler", // не выкидывает ошибку так как валидно для div элемента
};
