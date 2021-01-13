const {ConsoleLogger, EmailLogger, FileLogger} =
  require('./chain-of-responsibility.js');

const logger = new ConsoleLogger()
    .chain(new EmailLogger())
    .chain(new FileLogger());

logger.message('Hello, World!');
