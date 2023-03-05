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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        type
        concepts
        prompt
        solution
        Companies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncURLS = /* GraphQL */ `
  query SyncURLS(
    $filter: ModelURLFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncURLS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        source
        url
        Companies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      questionss {
        items {
          id
          questionsId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        questionss {
          nextToken
          startedAt
        }
        Reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        logo
        urls {
          nextToken
          startedAt
        }
        questionss {
          nextToken
          startedAt
        }
        Reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        logo
        urls {
          nextToken
          startedAt
        }
        questionss {
          nextToken
          startedAt
        }
        Reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestionsCompanies = /* GraphQL */ `
  query SyncQuestionsCompanies(
    $filter: ModelQuestionsCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionsCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        logo
        urls {
          nextToken
          startedAt
        }
        questionss {
          nextToken
          startedAt
        }
        Reviews {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncURLCompanies = /* GraphQL */ `
  query SyncURLCompanies(
    $filter: ModelURLCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncURLCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          logo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
