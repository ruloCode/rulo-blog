import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  showTop?: boolean
}

const Footer: React.FC<Props> = ({showTop}) => {
  const router = useRouter()
  return (
    <StyledWrapper>
      <a onClick={() => router.push("/")}>← Back</a>

      {showTop && (
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑ Top
        </a>
      )}
    
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
