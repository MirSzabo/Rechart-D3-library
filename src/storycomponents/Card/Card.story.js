import React from 'react';
import {storiesOf} from "@storybook/react";
import Card from "./Card.component";

storiesOf ("Cards", module).add("Crop Status Card", () => {
    return <Card title="Status" />;
});