import React, {useState} from 'react';
import {TodoItemsContainer} from './TodoItemsContainer';
import {NewTodoItem} from '../TodoItem/NewTodoItem';
import {TodoItem} from '../TodoItem/TodoItem';
import {useData, useDeleteTodoItem, useUpdateTodoItemStatus, useUpdateTodoItemPriority} from '../../data/hooks/useData';
import {SearchInput} from './components/SearchInput';
import {SortButton} from './components/SortButton';

export const TodoItems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayedItems, setDisplayedItems] = useState([]);
  const {data: todoItems, isLoading} = useData();

  const { mutate: toggleTodoStatus } = useUpdateTodoItemStatus();
  const {mutate: deleteTodo} = useDeleteTodoItem();
  const { mutate: updatePriority } = useUpdateTodoItemPriority();

  React.useEffect(() => {
    if (todoItems) {
      setDisplayedItems(todoItems);
    }
  }, [todoItems]);

  if (!todoItems || isLoading) {
    return (
      <TodoItemsContainer>
        Загрузка данных...
      </TodoItemsContainer>
    );
  }

  const filteredBySearchItems = displayedItems.filter((todoItem) => {
    if (searchValue.trim().length < 3) return true;
    const clearedTodoItemTitle = todoItem.title.trim().toLowerCase();
    const clearedSearchValue = searchValue.trim().replace(/\s+/g, '').toLowerCase();
    return clearedTodoItemTitle.includes(clearedSearchValue);
  });

  const handleToggleTodo = (id, isDone) => {
    toggleTodoStatus({ id, isDone });
  };

  const handleDeleteTodo = (id) => {
    const isConfirmed = window.confirm('Вы уверены, что хотите удалить задачу?');
    if (isConfirmed) {
      deleteTodo(id);
    }
  };

  const handlePriorityChange = (id, newPriority) => {
    updatePriority({ todoId: id, priority: newPriority });
  };

  const handleSort = () => {
    const sorted = [...displayedItems].sort((a, b) => a.priority - b.priority);
    setDisplayedItems(sorted);
  };

  const todoItemsElements = filteredBySearchItems.map((item) => {
    return <TodoItem
        key={item.id}
        id={item.id}
        title={item.title}
        checked={item.isDone}
        priority={item.priority}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
        onPriorityChange={handlePriorityChange}
    />;
  });

  return (
    <TodoItemsContainer>
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)} />
      <SortButton onSort={handleSort} />
      {todoItemsElements}
      <NewTodoItem />
    </TodoItemsContainer>
  )
}