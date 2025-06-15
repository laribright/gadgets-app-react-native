import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';

import { ProjectListItem } from '../../components/project-list-item';
import { getCategoryAndProjects } from '../../api/api';

const Category = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const { data, error, isLoading } = getCategoryAndProjects(slug);

  if (isLoading) return <ActivityIndicator />;
  if (error || !data) return <Text>Error: {error?.message}</Text>;
  if (!data.category || !data.projects) return <Redirect href='/404' />;

  const { category, projects } = data;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category.name }} />
      <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
      <FlatList
        data={projects}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProjectListItem project={item} />}
        numColumns={2}
        columnWrapperStyle={styles.projectRow}
        contentContainerStyle={styles.projectsList}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  categoryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  projectsList: {
    flexGrow: 1,
  },
  projectRow: {
    justifyContent: 'space-between',
  },
  projectContainer: {
    flex: 1,
    margin: 8,
  },
  projectImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  projectPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});
