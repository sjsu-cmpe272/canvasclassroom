/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudents = /* GraphQL */ `
  query GetStudents($id: ID!) {
    getStudents(id: $id) {
      id
      name
      year
      credits
      grades
      courses {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grades
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudentss = /* GraphQL */ `
  query ListStudentss(
    $filter: ModelStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        year
        credits
        grades
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
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
export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      id
      meetingsubject
      meetingtime
      createdAt
      updatedAt
    }
  }
`;
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meetingsubject
        meetingtime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourseByProf = /* GraphQL */ `
  query GetCourseByProf($id: ID!) {
    getCourseByProf(id: $id) {
      id
      creator
      category
      coursename
      coursedescription
      studentsenrolled
      labels
      studentsincourse {
        id
        name
        year
        credits
        grades
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourseByProfs = /* GraphQL */ `
  query ListCourseByProfs(
    $filter: ModelCourseByProfFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseByProfs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grades
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchCourseByProfs = /* GraphQL */ `
  query SearchCourseByProfs(
    $filter: SearchableCourseByProfFilterInput
    $sort: SearchableCourseByProfSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchCourseByProfs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grades
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
