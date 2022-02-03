import React from 'react';
import { render } from '@testing-library/react';
import { ConfirmationDialogComponent } from '.';

const getFullProps = () => {
  return {
    isOpen: false,
    title: 'Dialog Title',
    children: <h6 data-testid="dialogContent">Dialog content</h6>,
    labels: {
      acceptButton: 'OK',
      closeButton: 'Close',
    },
    onAccept: jest.fn(),
    onClose: jest.fn(),
  };
};

describe('Confirmation dialog component test', () => {
  it('component renders', () => {
    const props = getFullProps();

    const renderResult = render(
      <ConfirmationDialogComponent {...props}></ConfirmationDialogComponent>
    );

    const element = renderResult.baseElement;

    expect(element).not.toBeNull();
  });

  it('when isOpen is true, dialog is visible and title matches prop', () => {
    const props = getFullProps();
    props.isOpen = true;

    const renderResult = render(
      <ConfirmationDialogComponent {...props}></ConfirmationDialogComponent>
    );

    const element = renderResult.queryByText(props.title);

    expect(element).not.toBeNull();
    expect(element).toBeVisible();
  });

  it('when isOpen is false, dialog is not visible', () => {
    const props = getFullProps();
    props.isOpen = false;

    const renderResult = render(
      <ConfirmationDialogComponent {...props}></ConfirmationDialogComponent>
    );

    const element = renderResult.queryByText(props.title);

    expect(element).toBeNull();
  });

  it('when close button is clicked, onClose function is called', () => {
    const props = getFullProps();
    props.isOpen = true;

    const renderResult = render(
      <ConfirmationDialogComponent {...props}></ConfirmationDialogComponent>
    );

    const closeButton = renderResult.queryByText(props.labels.closeButton);
    closeButton.click();

    expect(props.onClose).toBeCalled();
  });

  it('when accept button is clicked, onAccept function is called', () => {
    const props = getFullProps();
    props.isOpen = true;

    const renderResult = render(
      <ConfirmationDialogComponent {...props}></ConfirmationDialogComponent>
    );

    const acceptButton = renderResult.queryByText(props.labels.acceptButton);
    acceptButton.click();

    expect(props.onAccept).toBeCalled();
  });

  it('dialog content is visible', () => {
    const props = getFullProps();
    props.isOpen = true;

    const renderResult = render(
      <ConfirmationDialogComponent {...props}></ConfirmationDialogComponent>
    );

    const dialogContent = renderResult.getByTestId('dialogContent');

    expect(dialogContent).not.toBeNull();
    expect(dialogContent).toBeVisible();
    expect(dialogContent.tagName).toEqual('H6');
  });
});
