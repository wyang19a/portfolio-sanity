import S from "@sanity/desk-tool/structure-builder";

export default () =>
S.list().title('Content').items([
  S.listItem().title('Profile')
  .child(S.document().schemaType('profile').documentId('profile')),
  S.listItem().title('Intro')
  .child(S.document().schemaType('intro').documentId('intro')),
  S.divider(),
  ...S.documentTypeListItems().filter(listItem => !['profile', 'intro'].includes(listItem.getId()))
])