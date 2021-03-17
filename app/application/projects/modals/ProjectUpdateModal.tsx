import { useMutation, useQuery, invalidateQuery } from "blitz"
import { FORM_ERROR } from "app/core/components/Form"
import ModalWrapper from "app/core/components/ModalWrapper"
import getProjects from "app/application/projects/queries/getProjects"
import getProject from "app/application/projects/queries/getProject"
import updateProject from "app/application/projects/mutations/updateProject"
import { projectValidation } from "app/application/projects/validations"
import { useModal } from "app/core/hooks/useModal"
import { ProjectForm } from "app/application/projects/components/ProjectForm"

const ProjectUpdateModal = () => {
  const { hideModal, modalProps } = useModal()
  const [project] = useQuery(getProject, { id: modalProps.projectId })
  const [updateProjectMutation] = useMutation(updateProject)

  return (
    <ModalWrapper modalTitle="Edit project" size="md" hasFooter>
      <ProjectForm
        submitText="Save"
        schema={projectValidation}
        initialValues={project}
        onSubmit={async (values) => {
          try {
            await updateProjectMutation({
              id: project.id,
              ...values,
            })
            invalidateQuery(getProjects)
            hideModal()
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

export default ProjectUpdateModal
