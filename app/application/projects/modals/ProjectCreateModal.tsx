import { useMutation, invalidateQuery, useRouter } from "blitz"
import { FORM_ERROR } from "app/core/components/Form"
import ModalWrapper from "app/core/components/ModalWrapper"
import { CreateProject } from "app/application/projects/validations"
import createProject from "app/application/projects/mutations/createProject"
import getProjects from "app/application/projects/queries/getProjects"
import { useModal } from "app/core/hooks/useModal"
import { ProjectForm } from "app/application/projects/components/ProjectForm"

const ProjectCreateModal = () => {
  const [createProjectMutation] = useMutation(createProject)
  const router = useRouter()
  const { hideModal } = useModal()

  return (
    <ModalWrapper modalTitle="Add project" size="md">
      <ProjectForm
        submitText="Add"
        schema={CreateProject}
        initialValues={{ name: "", color: "" }}
        onSubmit={async (values) => {
          try {
            const project = await createProjectMutation(values)
            hideModal()
            router.push(`/app/projects/${project.id}`)
            invalidateQuery(getProjects)
          } catch (error) {
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
        className="space-y-4"
      ></ProjectForm>
    </ModalWrapper>
  )
}

export default ProjectCreateModal
