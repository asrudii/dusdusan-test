import { ConfigProvider } from "antd";
import React from "react";

interface IAntdWrapperProps {
  children: React.ReactNode;
}

const AntdWrapper = ({ children }: IAntdWrapperProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#ffad00",
          borderRadius: 4,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdWrapper;
