# Installation

Copier standalone.xml dans $DOSSIER_JBOSS$\standalone\configuration\

Copier le dossier mysql dans $DOSSIER_JBOSS$\modules\com\

Dans le persistence.xml il faut changer une ligne:
- "<jta-data-source>java:jboss/MysqlDS</jta-data-source>" pour se connecter au mysql installé sur la machine virtuelle 1.
- "<jta-data-source>java:jboss/DefaultDS</jta-data-source>" pour se connecter au mysql local.

# Dans le cas du local:

Les accès doivent être configuré comme ceux-ci -> username = root, password = root

Il faut aussi créer une database dans le serveur -> CREATE DATABASE ecomDB