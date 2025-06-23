export interface ITodoListProps{
    todo: string;
    isDone: boolean;
    onUpdateTodoTobeDone: (index: number) => void;
    index: number;
}