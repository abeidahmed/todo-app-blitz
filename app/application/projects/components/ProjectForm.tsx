import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import * as z from "zod"
import { useModal } from "app/core/hooks/useModal"
export { FORM_ERROR } from "app/core/components/Form"

export function ProjectForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const { hideModal } = useModal()

  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" autoComplete="off" />
      <LabeledTextField name="color" label="Color" placeholder="Color" autoComplete="off" />
      <hr className="-mx-4 sm:-mx-6" />
      <div className="pb-3 flex items-center justify-end space-x-3">
        <button type="button" onClick={() => hideModal()} className="btn">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {props.submitText}
        </button>
      </div>
    </Form>
  )
}
