export class Todo {
  id: number;
  title: string;
  complete: boolean;
  list: number; 
  desc?: string;
  due?: number;
  timespans?: number[]

  constructor () {}
}
