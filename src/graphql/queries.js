/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      review
      rating
      level
      position
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        review
        rating
        level
        position
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const reviewsByCompanyID = /* GraphQL */ `
  query ReviewsByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        review
        rating
        level
        position
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
      id
      title
      type
      concepts
      prompt
      solution
      Companies {
        items {
          id
          questionsId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        concepts
        prompt
        solution
        Companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getURL = /* GraphQL */ `
  query GetURL($id: ID!) {
    getURL(id: $id) {
      id
      title
      source
      url
      Companies {
        items {
          id
          uRLId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listURLS = /* GraphQL */ `
  query ListURLS(
    $filter: ModelURLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listURLS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        source
        url
        Companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      logo
      urls {
        items {
          id
          uRLId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      questionss {
        items {
          id
          questionsId
          companyId
          createdAt
          updatedAt
        }
        nextToken
      }
      Reviews {
        items {
          id
          review
          rating
          level
          position
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        urls {
          nextToken
        }
        questionss {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestionsCompany = /* GraphQL */ `
  query GetQuestionsCompany($id: ID!) {
    getQuestionsCompany(id: $id) {
      id
      questionsId
      companyId
      questions {
        id
        title
        type
        concepts
        prompt
        solution
        Companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      company {
        id
        name
        logo
        urls {
          nextToken
        }
        questionss {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionsCompanies = /* GraphQL */ `
  query ListQuestionsCompanies(
    $filter: ModelQuestionsCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionsCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionsId
        companyId
        questions {
          id
          title
          type
          concepts
          prompt
          solution
          createdAt
          updatedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionsCompaniesByQuestionsId = /* GraphQL */ `
  query QuestionsCompaniesByQuestionsId(
    $questionsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsCompaniesByQuestionsId(
      questionsId: $questionsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionsId
        companyId
        questions {
          id
          title
          type
          concepts
          prompt
          solution
          createdAt
          updatedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionsCompaniesByCompanyId = /* GraphQL */ `
  query QuestionsCompaniesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsCompaniesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionsId
        companyId
        questions {
          id
          title
          type
          concepts
          prompt
          solution
          createdAt
          updatedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getURLCompany = /* GraphQL */ `
  query GetURLCompany($id: ID!) {
    getURLCompany(id: $id) {
      id
      uRLId
      companyId
      uRL {
        id
        title
        source
        url
        Companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      company {
        id
        name
        logo
        urls {
          nextToken
        }
        questionss {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listURLCompanies = /* GraphQL */ `
  query ListURLCompanies(
    $filter: ModelURLCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listURLCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uRLId
        companyId
        uRL {
          id
          title
          source
          url
          createdAt
          updatedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uRLCompaniesByURLId = /* GraphQL */ `
  query URLCompaniesByURLId(
    $uRLId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelURLCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uRLCompaniesByURLId(
      uRLId: $uRLId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        uRLId
        companyId
        uRL {
          id
          title
          source
          url
          createdAt
          updatedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uRLCompaniesByCompanyId = /* GraphQL */ `
  query URLCompaniesByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelURLCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uRLCompaniesByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        uRLId
        companyId
        uRL {
          id
          title
          source
          url
          createdAt
          updatedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
