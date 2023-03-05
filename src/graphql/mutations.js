/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
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
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
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
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
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
export const createURL = /* GraphQL */ `
  mutation CreateURL(
    $input: CreateURLInput!
    $condition: ModelURLConditionInput
  ) {
    createURL(input: $input, condition: $condition) {
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
export const updateURL = /* GraphQL */ `
  mutation UpdateURL(
    $input: UpdateURLInput!
    $condition: ModelURLConditionInput
  ) {
    updateURL(input: $input, condition: $condition) {
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
export const deleteURL = /* GraphQL */ `
  mutation DeleteURL(
    $input: DeleteURLInput!
    $condition: ModelURLConditionInput
  ) {
    deleteURL(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createQuestionsCompany = /* GraphQL */ `
  mutation CreateQuestionsCompany(
    $input: CreateQuestionsCompanyInput!
    $condition: ModelQuestionsCompanyConditionInput
  ) {
    createQuestionsCompany(input: $input, condition: $condition) {
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
export const updateQuestionsCompany = /* GraphQL */ `
  mutation UpdateQuestionsCompany(
    $input: UpdateQuestionsCompanyInput!
    $condition: ModelQuestionsCompanyConditionInput
  ) {
    updateQuestionsCompany(input: $input, condition: $condition) {
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
export const deleteQuestionsCompany = /* GraphQL */ `
  mutation DeleteQuestionsCompany(
    $input: DeleteQuestionsCompanyInput!
    $condition: ModelQuestionsCompanyConditionInput
  ) {
    deleteQuestionsCompany(input: $input, condition: $condition) {
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
export const createURLCompany = /* GraphQL */ `
  mutation CreateURLCompany(
    $input: CreateURLCompanyInput!
    $condition: ModelURLCompanyConditionInput
  ) {
    createURLCompany(input: $input, condition: $condition) {
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
export const updateURLCompany = /* GraphQL */ `
  mutation UpdateURLCompany(
    $input: UpdateURLCompanyInput!
    $condition: ModelURLCompanyConditionInput
  ) {
    updateURLCompany(input: $input, condition: $condition) {
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
export const deleteURLCompany = /* GraphQL */ `
  mutation DeleteURLCompany(
    $input: DeleteURLCompanyInput!
    $condition: ModelURLCompanyConditionInput
  ) {
    deleteURLCompany(input: $input, condition: $condition) {
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
