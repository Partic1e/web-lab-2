import {LocalStorage} from '../services/LocalStorage';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {TodoItem} from '../entity/TodoItem'

export const useData = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['todo'],
    queryFn: LocalStorage.getTodoItemsFromLocalStorage,
  });

  return {
    data,
    isLoading,
  };
}

export const useSaveNewTodoItem = () => {
  const client = useQueryClient();

  const {mutate, isPending, isSuccess} = useMutation({
    mutationFn: ({title}) => {
      const newTodoItem = new TodoItem(new Date().getTime(), title, false);
      return LocalStorage.saveTodoItemToLocalStorage(newTodoItem)
    },
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return {
    mutate,
    isPending,
    isSuccess
  }
}

export const useDeleteTodoItem = () => {
  const client = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: (todoId) => LocalStorage.deleteTodoItemFromLocalStorage(todoId),
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return mutate
}

export const useUpdateTodoItemStatus = () => {
  const client = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: ({id, isDone}) => LocalStorage.updateTodoItemStatusInLocalStorage(id, isDone),
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return mutate
}

export const useUpdateTodoItemPriority = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ todoId, priority }) => LocalStorage.updateTodoItemPriority(todoId, priority),
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return mutate
}