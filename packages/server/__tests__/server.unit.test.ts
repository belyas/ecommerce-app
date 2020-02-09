import { startServer } from '../src/server';

describe('Server', () => {
  it('should call startServer with param', () => {
    const PORT = 9090;
    const startServerSpy = jest
      .fn()
      .mockImplementationOnce(name => startServer(name));
    startServerSpy(PORT);

    expect(startServerSpy).toHaveBeenCalledWith(PORT);
    expect(startServerSpy).toHaveLastReturnedWith(`Server started on: ${PORT}`);
  });
});
