import { useMutation } from "blitz"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import ModalWrapper from "app/core/components/ModalWrapper"
import { CreateProject } from "app/application/projects/validations"
import createProject from "app/application/projects/mutations/createProject"
import { useModal } from "app/core/hooks/useModal"

const ProjectFormModal = () => {
  const [createProjectMutation] = useMutation(createProject)
  const { hideModal } = useModal()

  return (
    <ModalWrapper modalTitle="Add project" size="md">
      <Form
        schema={CreateProject}
        initialValues={{ name: "", color: "" }}
        onSubmit={async (values) => {
          try {
            await createProjectMutation(values)
            hideModal()
          } catch (error) {
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
        className="space-y-4"
      >
        <LabeledTextField name="name" label="Name" type="text" />
        <LabeledTextField name="color" label="Color" type="text" maxLength={7} />
        <div className="py-3 flex items-center justify-end space-x-3 border-t">
          <button type="button" className="btn">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </Form>
    </ModalWrapper>
  )
}

export default ProjectFormModal
