import { forwardRef, PropsWithoutRef } from "react"
import { useField, useFormikContext, ErrorMessage } from "formik"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const [input] = useField(name)
    const { isSubmitting } = useFormikContext()

    return (
      <div {...outerProps}>
        <label>
          {label}
          <input
            {...input}
            disabled={isSubmitting}
            {...props}
            ref={ref}
            className="mt-1 py-1.5 px-3 text-sm rounded block w-full leading-5 border-gray-300 focus:ring-gray-400 focus:border-gray-400"
          />
        </label>

        <ErrorMessage name={name}>
          {(msg) => (
            <div role="alert" className="font-semibold text-brand-600 mt-1">
              {msg}
            </div>
          )}
        </ErrorMessage>
      </div>
    )
  }
)

export default LabeledTextField
