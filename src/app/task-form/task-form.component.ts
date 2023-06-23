import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() submitTask: EventEmitter<string[]> = new EventEmitter<string[]>();

  public taskInputs: { value: string }[] = [];

  public addTaskInput(): void {
    this.taskInputs.push({ value: '' });
  }

  public removeTaskInput(index: number): void {
    this.taskInputs.splice(index, 1);
  }

  public submitTasks(): void {
    const tasks = this.taskInputs.map(taskInput => taskInput.value);
    this.submitTask.emit(tasks);
    this.taskInputs = [];
  }
}


