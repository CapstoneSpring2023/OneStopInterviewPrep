/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
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
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onCreateQuestions(filter: $filter) {
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
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onUpdateQuestions(filter: $filter) {
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
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onDeleteQuestions(filter: $filter) {
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
export const onCreateURL = /* GraphQL */ `
  subscription OnCreateURL($filter: ModelSubscriptionURLFilterInput) {
    onCreateURL(filter: $filter) {
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
export const onUpdateURL = /* GraphQL */ `
  subscription OnUpdateURL($filter: ModelSubscriptionURLFilterInput) {
    onUpdateURL(filter: $filter) {
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
export const onDeleteURL = /* GraphQL */ `
  subscription OnDeleteURL($filter: ModelSubscriptionURLFilterInput) {
    onDeleteURL(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateQuestionsCompany = /* GraphQL */ `
  subscription OnCreateQuestionsCompany(
    $filter: ModelSubscriptionQuestionsCompanyFilterInput
  ) {
    onCreateQuestionsCompany(filter: $filter) {
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
export const onUpdateQuestionsCompany = /* GraphQL */ `
  subscription OnUpdateQuestionsCompany(
    $filter: ModelSubscriptionQuestionsCompanyFilterInput
  ) {
    onUpdateQuestionsCompany(filter: $filter) {
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
export const onDeleteQuestionsCompany = /* GraphQL */ `
  subscription OnDeleteQuestionsCompany(
    $filter: ModelSubscriptionQuestionsCompanyFilterInput
  ) {
    onDeleteQuestionsCompany(filter: $filter) {
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
export const onCreateURLCompany = /* GraphQL */ `
  subscription OnCreateURLCompany(
    $filter: ModelSubscriptionURLCompanyFilterInput
  ) {
    onCreateURLCompany(filter: $filter) {
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
export const onUpdateURLCompany = /* GraphQL */ `
  subscription OnUpdateURLCompany(
    $filter: ModelSubscriptionURLCompanyFilterInput
  ) {
    onUpdateURLCompany(filter: $filter) {
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
export const onDeleteURLCompany = /* GraphQL */ `
  subscription OnDeleteURLCompany(
    $filter: ModelSubscriptionURLCompanyFilterInput
  ) {
    onDeleteURLCompany(filter: $filter) {
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
