import { useField } from "formik";
import { useState } from "react";


export default function Input(props: any) {

  const { label, classes, ...inputProps } = props;
  const [labelAtTop, setLabelAtTop] = useState(false);
  const [field, meta] = useField(inputProps);
  let hasError = () => {
    return !!meta.error && !!meta.touched;
  };
  
  const getLabelClasses = (): string => {
    let classes: string = `capitalize bg-white text-sm px-0.5 absolute transform -translate-y-1/2 transition-all`;
    
    if (labelAtTop) {
      classes += ` left-2 top-0`;
      
      if (hasError()) {
        classes += ` text-red-600`;
      } else {
        classes += ` text-indigo-600`;
      }
      
    } else {
      classes += ` left-4 top-1/2`;
      
      if (hasError()) {
        classes += ` text-red-600`;
      } else {
        classes += ` text-gray-400`;
      }
      
    }
    
    return classes;
  }
  
  const getInputFiledClasses = ()=> {
    const commonClasses: string = `${classes} transition-all block sm:text-sm w-full px-4 py-2 border-2 outline-none rounded-md`;
    const validClasses: string = `focus:ring-indigo-500 focus:border-indigo-500 border-gray-300`;
    const errorClasses: string = `ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500`;
    return `${commonClasses} ${hasError() ? errorClasses : validClasses}`
  }

  const updateLabelAtTop = (value: boolean) => {
    if(meta.value){
      setLabelAtTop(true);
    } else {
      setLabelAtTop(value)
    }
  }

  return (
    <div className="relative my-6" onClick={() => updateLabelAtTop(true)}>
      <label htmlFor={inputProps.id || inputProps.name} className={getLabelClasses()}>{label}</label>
      <input
        {...field}
        {...inputProps}  
      
        className={getInputFiledClasses()}
        
        onBlur={(e) => {
          field.onBlur(e);
          updateLabelAtTop(false);
        }}
        onFocus={() => updateLabelAtTop(true)}
      />
      {
        hasError() ? <div className="absolute text-red-500 text-xs">{meta.error}</div> : null
      }
    </div>
  );
}