import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from '.';

describe('confirmation dialog hook test', () => {
  it('should return props with isOpen false', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('when calling onOpenDialog, isOpen should be true, and itemToDelete should match input', () => {
    // Arrange
    const itemToDelete = {
      id: '1',
      name: 'Deleted',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });

  it('when calling onClose, isOpen should be false', () => {
    // Arrange
    const itemToDelete = {
      id: '1',
      name: 'Deleted',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('when calling onAccept, itemToDelete should be empty', () => {
    // Arrange
    const inputItemToDelete = {
      id: '1',
      name: 'Deleted',
    };
    const resultItemToDelete = {
      id: '',
      name: '',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(inputItemToDelete);
    });

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(resultItemToDelete);
  });
});
