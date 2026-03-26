// components/UiButton.tsx
import React from 'react';
import { Button, type ButtonProps } from 'antd';

export type UiButtonProps = ButtonProps;

export const UiButton: React.FC<UiButtonProps> = (props) => {
  return <Button type="primary" size="middle" {...props} />;
};
