### Radio input main component

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| label | string | No | Radio input main label |
| items | [RadioInputItem](#radioinputitem-type)[] | Yes | Options list in the `[{value, label}, ...]` form |
| value | number \| string | No | Current value |
| onChange | (**value**: number \| string, **label**: string) => void | Yes | Callback to be called when an option is selected or a custom value is typed (see [options props](#radioinputitem-type) for `value` and `label` meaning) |
| allowCustomValues | boolean | No | Allow or disallow custom text values |
| customValueLabel | string | No | Label for custom value input if allowed |
| style | object | No | Outer style for page layout |

<a id="radioinputitem-type"></a>
### Options (RadioInputItem type)

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Technical value to store in your app and to be used in enums for example |
| label | string | Yes | Displayed value for this option |
