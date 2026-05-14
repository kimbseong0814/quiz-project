import { quizzesPaths, quizzesSchemas } from '../modules/quizzes/quizzes.swagger.js'
import { resultsPaths, resultsSchemas } from '../modules/results/results.swagger.js'

const openApiDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Family Quiz API',
    version: '1.0.0',
    description: '가족 퀴즈 프로젝트 API 문서',
  },
  servers: [
    {
      url: 'http://localhost:10000',
      description: 'Local server',
    },
    {
      url: 'https://quiz-project-backend-gi9d.onrender.com',
      description: 'Render server',
    },
  ],
  paths: {
    '/': {
      get: {
        tags: ['Health'],
        summary: '백엔드 기본 연결 확인',
        responses: {
          '200': {
            description: '백엔드 연결 성공',
          },
        },
      },
    },
    '/health': {
      get: {
        tags: ['Health'],
        summary: '서버 상태 확인',
        responses: {
          '200': {
            description: '서버 정상',
          },
        },
      },
    },
    ...quizzesPaths,
    ...resultsPaths,
  },
  components: {
    schemas: {
      ...quizzesSchemas,
      ...resultsSchemas,
    },
  },
}

export default openApiDocument