import React, { useState, useEffect } from 'react';
import { isFunction } from 'lodash';

const InputNumber = (props = {}) => {
    const { value: propsValue, onchange: onPropschange, ...otherProps } = props;
    const [value, setValue] = useState(propsValue);

    useEffect(() => {
        const { value: propsValue } = props;
        setValue(propsValue);
    }, [propsValue]);

    const onchange = (e = {}) => {
        const { currentTarget: { value: changeValue = '' } = {} } = e;
        if (propsValue) {
            setValue(changeValue);
        }
        if (isFunction(onPropschange)) {
            onPropschange(changeValue);
        }
    }
    return <input {...otherProps} value={value} onChange={onchange} />
}

function App() {
    const [value, setValue] = useState('aaa');
    return (
        <div>
            <InputNumber
                value={value}
                onChange={
                    e => {
                        console.log(e);
                        setValue(e)
                    }
                }
            />
            <InputNumber
                defaultValue={value}
                onChange={
                    e => {
                        console.log(e);
                        setValue(e)
                    }
                }
            />
        </div>
    )
}
