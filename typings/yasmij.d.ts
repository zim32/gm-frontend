declare interface YasmijInput {
    type: "maximize" | "minimize";
    objective: string;
    constraints: string[];
}

declare interface YasmijStatic {

    solve(input: YasmijInput): YasmijOutput;

}

declare interface YasmijOutput {
    result: { [key:string]: number }
}

declare var YASMIJ: YasmijStatic;

declare module "yasmij" {

    export = YASMIJ;

}