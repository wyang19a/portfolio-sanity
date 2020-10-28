import S from "@sanity/desk-tool/structure-builder";

export default () =>
S.list().title('Content').items([
  S.listItem().title('Profile')
  .child(S.document().schemaType('profile').documentId('profile')),
  S.divider(),
  ...S.documentTypeListItems().filter(listItem => !['profile'].includes(listItem.getId()))
])
