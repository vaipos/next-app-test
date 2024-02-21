import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

const Alert = ({children, onClick} : Props) => {
  return (
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong> You should check in on some of those fields below.
  <button onClick= {onClick} type="button" className="btn-close" data-bs-dismiss="alert" >
  </button>
</div>  )
}

export default Alert