import React from 'react';
import { render } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

jest.mock('react-promise-tracker', () => {
  const actualImplementation = jest.requireActual('react-promise-tracker');

  return {
    ...actualImplementation,
    usePromiseTracker: jest.fn(),
  };
});

describe('spinner component tests', () => {
  it('component should render', () => {
    // Arrange
    (usePromiseTracker as jest.Mock).mockImplementation(() => ({
      promiseInProgress: false,
    }));

    // Act
    const renderResult = render(<SpinnerComponent></SpinnerComponent>);

    // Assert
    expect(renderResult.baseElement).not.toBeNull();
  });

  it('if a promise is ongoing, spinner should show', () => {
    // Arrange
    (usePromiseTracker as jest.Mock).mockImplementation(() => ({
      promiseInProgress: true,
    }));

    // Act
    const { queryByTestId } = render(<SpinnerComponent></SpinnerComponent>);
    const modalBody = queryByTestId('modal-body');

    //Assert
    expect(modalBody).not.toBeNull();
    expect(modalBody).toBeVisible();
  });

  it('if no promise is ongoing, spinner should not show', () => {
    // Arrange
    (usePromiseTracker as jest.Mock).mockImplementation(() => ({
      promiseInProgress: false,
    }));

    // Act
    const { queryByTestId } = render(<SpinnerComponent></SpinnerComponent>);
    const modalBody = queryByTestId('modal-body');

    //Assert
    expect(modalBody).toBeNull();
  });
});
