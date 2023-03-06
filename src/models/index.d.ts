import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly review: string;
  readonly rating: string;
  readonly level: number[];
  readonly position: string;
  readonly companyID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly review: string;
  readonly rating: string;
  readonly level: number[];
  readonly position: string;
  readonly companyID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type: number;
  readonly concepts?: (string | null)[] | null;
  readonly prompt: string;
  readonly solution: string;
  readonly Companies?: QuestionsCompany[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type: number;
  readonly concepts?: (string | null)[] | null;
  readonly prompt: string;
  readonly solution: string;
  readonly Companies: AsyncCollection<QuestionsCompany>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}

type EagerURL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<URL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly source?: string | null;
  readonly url: string;
  readonly Companies?: URLCompany[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyURL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<URL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly source?: string | null;
  readonly url: string;
  readonly Companies: AsyncCollection<URLCompany>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type URL = LazyLoading extends LazyLoadingDisabled ? EagerURL : LazyURL

export declare const URL: (new (init: ModelInit<URL>) => URL) & {
  copyOf(source: URL, mutator: (draft: MutableModel<URL>) => MutableModel<URL> | void): URL;
}

type EagerCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logo?: string | null;
  readonly urls?: (URLCompany | null)[] | null;
  readonly questionss?: (QuestionsCompany | null)[] | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logo?: string | null;
  readonly urls: AsyncCollection<URLCompany>;
  readonly questionss: AsyncCollection<QuestionsCompany>;
  readonly Reviews: AsyncCollection<Review>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerQuestionsCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionsCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionsId?: string | null;
  readonly companyId?: string | null;
  readonly questions: Questions;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionsCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionsCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionsId?: string | null;
  readonly companyId?: string | null;
  readonly questions: AsyncItem<Questions>;
  readonly company: AsyncItem<Company>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuestionsCompany = LazyLoading extends LazyLoadingDisabled ? EagerQuestionsCompany : LazyQuestionsCompany

export declare const QuestionsCompany: (new (init: ModelInit<QuestionsCompany>) => QuestionsCompany) & {
  copyOf(source: QuestionsCompany, mutator: (draft: MutableModel<QuestionsCompany>) => MutableModel<QuestionsCompany> | void): QuestionsCompany;
}

type EagerURLCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<URLCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uRLId?: string | null;
  readonly companyId?: string | null;
  readonly url: URL;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyURLCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<URLCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uRLId?: string | null;
  readonly companyId?: string | null;
  readonly url: AsyncItem<URL>;
  readonly company: AsyncItem<Company>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type URLCompany = LazyLoading extends LazyLoadingDisabled ? EagerURLCompany : LazyURLCompany

export declare const URLCompany: (new (init: ModelInit<URLCompany>) => URLCompany) & {
  copyOf(source: URLCompany, mutator: (draft: MutableModel<URLCompany>) => MutableModel<URLCompany> | void): URLCompany;
}