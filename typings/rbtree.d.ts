interface RedBlackTreeFactory {
    (): RedBlackTree;
}

interface RedBlackTree {
    hello(): string;
}

declare var createTree: RedBlackTreeFactory;

declare module "functional-red-black-tree" {
    export = createTree;
}