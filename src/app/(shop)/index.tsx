import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { PROJECTS } from '../../../assets/projects';
import { ProjectListItem } from '../../components/project-list-item';
import { ListHeader } from '../../components/list-header';
import { getProjectsAndCategories } from '../../api/api';

const Home = () => {
  const { data, error, isLoading } = getProjectsAndCategories();

  if (isLoading) return <ActivityIndicator />;

  if (error || !data)
    return <Text>Error {error?.message || 'An error occured'}</Text>;

  return (
    <View>
      <FlatList
        data={data.projects}
        renderItem={({ item }) => <ProjectListItem project={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
});
