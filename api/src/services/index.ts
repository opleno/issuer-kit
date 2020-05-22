import { Application } from "../declarations";
import issuerInvite from "./issuer-invite/issuer-invite.service";
import mailer from "./mailer/mailer.service";
import ariesAgent from './aries-agent/aries-agent.service';
import connection from './connection/connection.service';
import credentialExchange from './credential-exchange/credential-exchange.service';
// Don't remove this comment. It's needed to format import lines nicely.

export function services(app: Application) {
  app.configure(issuerInvite);
  app.configure(connection);
  app.configure(credentialExchange);
}

export function internalServices(app: Application) {
  app.configure(mailer);
  app.configure(ariesAgent);
}
