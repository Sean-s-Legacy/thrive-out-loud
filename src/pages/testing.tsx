import React from "react";
import styles from "@/styles/testing.module.scss";

import { Divider, Typography, Button, Space } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function testing(props) {
  return (
    <Space direction="vertical">
      {/* Text elements */}
      <Space
        direction="horizontal"
        align="start"
        // className="space1"
        size={20}
      >
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Text className="textLarge">Text Large - Regular</Text>
          <Text>Text Body - Regular</Text>
          <Text className="underline">Text Body - Underline</Text>
          <Text className="italic">Text Body - Italic</Text>
          <Text className="footnote">Footnote</Text>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Text className="mediumWeight textLarge">Text Large - Medium</Text>
          <Text className="mediumWeight">Text Body - Medium</Text>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Text className="semibold textLarge">Text Large - Semibold</Text>
          <Text className="semibold">Text Body - Semibold</Text>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Text className="bold textLarge">Text Large - Bold</Text>
          <Text className="bold">Text Body - Bold</Text>
        </Space>
      </Space>

      {/* Titles - H1, H2, H3 */}
      <Space direction="horizontal" align="start" className="space1">
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Title>H1 - Medium</Title>
          <Title className="semibold">H1 - Semibold</Title>
          <Title className="bold">H1 - Bold</Title>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Title level={2}>H2 - Medium</Title>
          <Title level={2} className="semibold">
            H2 - Semibold
          </Title>
          <Title level={2} className="bold">
            H2 - Bold
          </Title>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Title level={3}>H3 - Medium</Title>
          <Title level={3} className="semibold">
            H3 - Semibold
          </Title>
          <Title level={3} className="bold">
            H3 - Bold
          </Title>
        </Space>
      </Space>

      {/* Buttons - You can also add prop "ghost" for inverted colors if using colored backgrounds*/}
      <Space direction="horizontal" align="start">
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Button type="primary" size="large">
            Primary - Large
          </Button>
          <Button type="primary">Primary - Medium</Button>
          <Button type="primary" size="small">
            Primary - Small
          </Button>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Button size="large">Default - Large</Button>
          <Button>Default - Medium</Button>
          <Button size="small">Default - Small</Button>
        </Space>

        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Button type="dashed" size="large">
            Dashed - Large
          </Button>
          <Button type="dashed">Dashed - Medium</Button>
          <Button type="dashed" size="small">
            Dashed - Small
          </Button>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Button type="link" size="large">
            Link - Large
          </Button>
          <Button type="link">Link - Medium</Button>
          <Button type="link" size="small">
            Link - Small
          </Button>
        </Space>
        <Space className={styles.spaceAlignBlock} direction="vertical">
          <Button type="text" size="large">
            Text - Large
          </Button>
          <Button type="text">Text - Medium</Button>
          <Button type="text" size="small">
            Text - Small
          </Button>
        </Space>
      </Space>
    </Space>
  );
}

export default testing;
