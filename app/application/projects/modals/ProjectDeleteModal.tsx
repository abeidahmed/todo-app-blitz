import { useMutation, useRouter, invalidateQuery } from "blitz"
import * as Feather from "react-feather"
import deleteProject from "app/application/projects/mutations/deleteProject"
import getProjects from "app/application/projects/queries/getProjects"
import { useModal } from "app/core/hooks/useModal"
import ModalWrapper from "app/core/components/ModalWrapper"

const ProjectDeleteModal = () => {
  const router = useRouter()
  const { hideModal, modalProps } = useModal()
  const [deleteProjectMutation] = useMutation(deleteProject)

  return (
    <ModalWrapper size="md" hasFooter>
      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-red-100 mx-auto">
        <Feather.AlertTriangle size={20} className="text-brand-600" />
      </div>
      <p className="mt-4 text-center">Are you sure you want to delete this project?</p>
      <hr className="my-4 -mx-4 sm:-mx-6" />
      <div className="pb-3 flex items-center justify-end space-x-3">
        <button type="button" onClick={() => hideModal()} className="btn">
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={async () => {
            await deleteProjectMutation({ id: modalProps.projectId })
            hideModal()
            if (router.params.projectId === modalProps.projectId) {
              router.push("/app/today")
            }
            invalidateQuery(getProjects)
          }}
        >
          Delete
        </button>
      </div>
    </ModalWrapper>
  )
}

export default ProjectDeleteModal
