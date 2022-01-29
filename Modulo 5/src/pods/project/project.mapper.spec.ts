import * as projectMapper from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('Project mapper test', () => {
  it('should return empty project if input is null', () => {
    //Arrange
    const input = null;
    const expectedResult = viewModel.createEmptyProject();

    //Act
    const result = projectMapper.mapProjectFromApiToVm(input);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty project if input is undefined', () => {
    //Arrange
    const input = undefined;
    const expectedResult = viewModel.createEmptyProject();

    //Act
    const result = projectMapper.mapProjectFromApiToVm(input);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return correct model with properties if input is populated', () => {
    //Arrange
    const input: apiModel.Project = {
      id: '1',
      isActive: true,
      name: 'TestName',
      externalId: null,
      comments: 'Test comment',
      employees: [
        {
          id: '1',
          employeeName: 'Employee 1',
          isAssigned: false,
        },
        {
          id: '2',
          employeeName: 'Employee 2',
          isAssigned: true,
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      isActive: true,
      name: 'TestName',
      externalId: null,
      comments: 'Test comment',
      employees: [
        {
          id: '1',
          employeeName: 'Employee 1',
          isAssigned: false,
        },
        {
          id: '2',
          employeeName: 'Employee 2',
          isAssigned: true,
        },
      ],
    };

    //Act
    const result = projectMapper.mapProjectFromApiToVm(input);

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
