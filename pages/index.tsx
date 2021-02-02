import styled from 'styled-components';
import db from '../db.json';

import Link from '../src/components/Link/Link';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const pageLinks: PageLinksProps[] = db.pageLinks;

  return (
    <>
      <Title>Estudos Gerais</Title>
      {pageLinks.map((pageLink, pageLinkId) => {
        const pageLinkKey = `pageLink_${pageLinkId}`;
        return (
          <Link
            key={pageLinkKey}
            href={pageLink.href}
          >
            {pageLink.description}{'<>'}
          </Link>
        )
      })}
    </>
  );
}

interface PageLinksProps {
  description: string;
  href: string;
  linkLearned?: string;
}