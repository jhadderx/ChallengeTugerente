import { useState } from "react";

const valuesDropdown = () => {
    const [dropValues, setDropValues] = useState(null);

    return { dropValues, setDropValues }
}

export default valuesDropdown;
