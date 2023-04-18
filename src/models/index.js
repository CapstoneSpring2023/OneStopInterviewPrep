// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, Questions, URL, Company, QuestionsCompany, URLCompany } = initSchema(schema);

export {
  Review,
  Questions,
  URL,
  Company,
  QuestionsCompany,
  URLCompany
};